package mobile

import (
	"context"
	"time"

	"ThroneCore/internal/probe"

	box "github.com/sagernet/sing-box"
	"github.com/sagernet/sing-box/adapter"
	E "github.com/sagernet/sing/common/exceptions"
)

const urlTestReportInterval = 200 * time.Millisecond

var errInstanceNotRunning = E.New("instance is not running")

// One request shape for every probe kind: the speed-test fields are ignored by the URL and IP tests.
// The tag and full-config lists stay unexported because gomobile binds no slice but []byte.
type TestRequest struct {
	CoreConfig              string
	XrayConfig              string
	NeedXray                bool
	XrayOutboundDNSStrategy string
	URL                     string
	MaxConcurrency          int32
	TimeoutMs               int32
	UseDefaultOutbound      bool
	TestCurrent             bool

	TestDownload       bool
	TestUpload         bool
	SimpleDownload     bool
	SimpleDownloadAddr string
	OnlyCountry        bool
	CountryConcurrency int32

	tags            []string
	xrayFullConfigs []string
}

func (r *TestRequest) AddOutboundTag(tag string) {
	r.tags = append(r.tags, tag)
}

func (r *TestRequest) AddXrayFullConfig(config string) {
	r.xrayFullConfigs = append(r.xrayFullConfigs, config)
}

type URLTestHandler interface {
	OnResult(tag string, latencyMs int32, err string)
	OnDone()
}

type IPTestHandler interface {
	OnResult(tag string, ip string, countryCode string, err string)
	OnDone()
}

type SpeedTestResult struct {
	Tag           string
	DlSpeed       string
	UlSpeed       string
	Latency       int32
	ServerName    string
	ServerCountry string
	Error         string
	Cancelled     bool
	DlBytes       int64
	UlBytes       int64
	Running       bool
}

type SpeedTestHandler interface {
	OnResult(result *SpeedTestResult)
	OnDone()
}

type testEnv struct {
	box   probe.Box
	tags  []string
	close func()
}

// Copy of rpc.prepareTestEnv. A probe env builds its own eager Xray instances and its own box
// (PlatformLogWriter nil: no cache.db sharing, no accounting) around a separate context holder;
// `current` measures the running instance instead and owns nothing.
func prepareTestEnv(current *Instance, testCurrent bool, platform PlatformInterface, request *TestRequest) (*testEnv, error) {
	holder := new(boxContextHolder)
	prepareXray := xrayPreparer(request.XrayOutboundDNSStrategy, holder.get)

	if testCurrent {
		if current == nil || !current.running() {
			return nil, errInstanceNotRunning
		}
		outTags := request.tags
		useDefaultOutbound := request.UseDefaultOutbound
		if _, exists := current.outbounds.Outbound("proxy"); exists {
			outTags = []string{"proxy"}
		} else {
			useDefaultOutbound = true
		}
		if useDefaultOutbound {
			outTags = []string{current.outbounds.Default().Tag()}
		}
		return &testEnv{box: current.handle, tags: outTags, close: func() {}}, nil
	}

	installProtector(platform)

	var cleanups []func()
	unwind := func() {
		for i := len(cleanups) - 1; i >= 0; i-- {
			cleanups[i]()
		}
	}

	if request.NeedXray {
		instance, err := startXrayInstance(request.XrayConfig, prepareXray)
		if err != nil {
			return nil, err
		}
		cleanups = append(cleanups, func() { _ = instance.Close() })
	}

	fullXray, err := startXrayFullConfigs(request.xrayFullConfigs, prepareXray)
	if err != nil {
		unwind()
		return nil, err
	}
	cleanups = append(cleanups, func() { closeXrayInstances(fullXray) })

	var platformInterface adapter.PlatformInterface
	if platform != nil {
		platformInterface = newPlatformInterfaceWrapper(platform)
	}
	ctx := newBoxContext(platform, platformInterface)
	options, err := parseConfig(ctx, request.CoreConfig)
	if err != nil {
		unwind()
		return nil, err
	}
	ctx, cancel := context.WithCancel(ctx)
	boxInstance, err := box.New(box.Options{
		Context: ctx,
		Options: options,
	})
	if err != nil {
		cancel()
		unwind()
		return nil, E.Cause(err, "create service")
	}
	holder.publish(ctx)
	cleanups = append(cleanups, func() { closeBoxWithTimeout(cancel, boxInstance, boxCloseTimeout, false) })
	if err = boxInstance.Start(); err != nil {
		unwind()
		return nil, E.Cause(err, "start service")
	}

	outTags := request.tags
	if request.UseDefaultOutbound {
		outTags = []string{boxInstance.Outbound().Default().Tag()}
	}
	return &testEnv{box: &boxHandle{ctx: ctx, Box: boxInstance}, tags: outTags, close: unwind}, nil
}

func errorString(err error) string {
	if err == nil {
		return ""
	}
	return err.Error()
}

// Results reach the handler as they land, the way the desktop polls QueryURLTest, by draining the
// probe reporter while the batch runs; the batch's return value then fills in whatever the drain
// missed (aborted tags are never published to the reporter).
type urlTestReporter struct {
	handler  URLTestHandler
	tags     map[string]struct{}
	reported map[string]struct{}
}

func newURLTestReporter(tags []string, handler URLTestHandler) *urlTestReporter {
	reporter := &urlTestReporter{
		handler:  handler,
		tags:     make(map[string]struct{}, len(tags)),
		reported: make(map[string]struct{}, len(tags)),
	}
	for _, tag := range tags {
		reporter.tags[tag] = struct{}{}
	}
	return reporter
}

func (r *urlTestReporter) report(result *probe.URLTestResult) {
	if result == nil {
		return
	}
	if _, ours := r.tags[result.Tag]; !ours {
		return
	}
	if _, done := r.reported[result.Tag]; done {
		return
	}
	r.reported[result.Tag] = struct{}{}
	r.handler.OnResult(result.Tag, int32(result.Duration.Milliseconds()), errorString(result.Error))
}

func (r *urlTestReporter) drain() {
	for _, result := range probe.URLReporter.Results() {
		r.report(result)
	}
}

func (r *urlTestReporter) run(batch func() []*probe.URLTestResult) {
	stop := make(chan struct{})
	stopped := make(chan struct{})
	go func() {
		defer close(stopped)
		ticker := time.NewTicker(urlTestReportInterval)
		defer ticker.Stop()
		for {
			select {
			case <-stop:
				return
			case <-ticker.C:
				r.drain()
			}
		}
	}()
	results := batch()
	close(stop)
	<-stopped
	r.drain()
	for _, result := range results {
		r.report(result)
	}
}

// current is only consulted when request.TestCurrent is set; platform wires protect, the interface
// monitor and the local DNS transport into the probe box and may be nil off-device.
func StartURLTest(current *Instance, platform PlatformInterface, request *TestRequest, handler URLTestHandler) error {
	if request == nil || handler == nil {
		return E.New("nil request or handler")
	}
	env, err := prepareTestEnv(current, request.TestCurrent, platform, request)
	if err != nil {
		return err
	}
	// Held, not re-read: StopTests rearms a fresh context.
	testCtx := probe.TestContext()
	// A muxed config needs a warm connection; the live instance already is one.
	twice := !request.TestCurrent
	timeout := time.Duration(request.TimeoutMs) * time.Millisecond
	go func() {
		defer handler.OnDone()
		defer env.close()
		newURLTestReporter(env.tags, handler).run(func() []*probe.URLTestResult {
			return probe.BatchURLTest(testCtx, env.box, env.tags, request.URL, int(request.MaxConcurrency), twice, timeout)
		})
	}()
	return nil
}

// Always builds its own box: there is no test-current variant of an IP test.
func StartIPTest(platform PlatformInterface, request *TestRequest, handler IPTestHandler) error {
	if request == nil || handler == nil {
		return E.New("nil request or handler")
	}
	env, err := prepareTestEnv(nil, false, platform, request)
	if err != nil {
		return err
	}
	testCtx := probe.TestContext()
	timeout := time.Duration(request.TimeoutMs) * time.Millisecond
	go func() {
		defer handler.OnDone()
		defer env.close()
		results := probe.BatchIPTest(testCtx, env.box, env.tags, int(request.MaxConcurrency), true, timeout)
		for _, result := range results {
			handler.OnResult(result.Tag, result.Result.IP, result.Result.CountryCode, errorString(result.Error))
		}
	}()
	return nil
}

func flattenSpeedTestResult(result probe.SpeedTestResult, running bool) *SpeedTestResult {
	return &SpeedTestResult{
		Tag:           result.Tag,
		DlSpeed:       result.DlSpeed,
		UlSpeed:       result.UlSpeed,
		Latency:       result.Latency,
		ServerName:    result.ServerName,
		ServerCountry: result.ServerCountry,
		Error:         errorString(result.Error),
		Cancelled:     result.Cancelled,
		DlBytes:       result.DlBytes,
		UlBytes:       result.UlBytes,
		Running:       running,
	}
}

func StartSpeedTest(current *Instance, platform PlatformInterface, request *TestRequest, handler SpeedTestHandler) error {
	if request == nil || handler == nil {
		return E.New("nil request or handler")
	}
	if !request.TestDownload && !request.TestUpload && !request.SimpleDownload && !request.OnlyCountry {
		return E.New("cannot run empty test")
	}
	env, err := prepareTestEnv(current, request.TestCurrent, platform, request)
	if err != nil {
		return err
	}
	testCtx := probe.TestContext()
	timeout := time.Duration(request.TimeoutMs) * time.Millisecond
	go func() {
		defer handler.OnDone()
		defer env.close()
		results := probe.BatchSpeedTest(testCtx, env.box, env.tags,
			request.TestDownload, request.TestUpload, request.SimpleDownload, request.SimpleDownloadAddr,
			timeout, request.OnlyCountry, request.CountryConcurrency)
		for _, result := range results {
			handler.OnResult(flattenSpeedTestResult(*result, false))
		}
	}()
	return nil
}

// Live progress of the speed test in flight; Running is false once it has finished.
func QuerySpeedTest() *SpeedTestResult {
	result, running := probe.SpTQuerier.Result()
	return flattenSpeedTestResult(result, running)
}

func StopTests() {
	probe.CancelTests()
}
