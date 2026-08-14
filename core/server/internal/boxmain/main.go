package boxmain

import (
	"context"
	"os"
	"os/user"
	"strconv"
	"time"

	"github.com/sagernet/sing-box"
	"github.com/sagernet/sing-box/experimental/deprecated"
	"github.com/sagernet/sing-box/include"
	"github.com/sagernet/sing-box/log"
	"github.com/sagernet/sing/service"
	"github.com/sagernet/sing/service/filemanager"

	"github.com/spf13/cobra"
)

var (
	globalCtx         context.Context
	configPaths       []string
	configDirectories []string
	workingDir        string
	disableColor      bool
)

var mainCommand = &cobra.Command{
	Use:              "sing-box",
	PersistentPreRun: preRun,
}

func init() {
	mainCommand.PersistentFlags().StringArrayVarP(&configPaths, "config", "c", nil, "set configuration file path")
	mainCommand.PersistentFlags().StringArrayVarP(&configDirectories, "config-directory", "C", nil, "set configuration directory path")
	mainCommand.PersistentFlags().StringVarP(&workingDir, "directory", "D", "", "set working directory")
	mainCommand.PersistentFlags().BoolVarP(&disableColor, "disable-color", "", false, "disable color output")
}

func preRun(cmd *cobra.Command, args []string) {
	if disableColor {
		log.SetStdLogger(log.NewDefaultFactory(context.Background(), log.Formatter{BaseTime: time.Now(), DisableColors: true}, os.Stderr, "", nil, false).Logger())
	}
	globalCtx = newBoxContext()
	if workingDir != "" {
		_, err := os.Stat(workingDir)
		if err != nil {
			filemanager.MkdirAll(globalCtx, workingDir, 0o777)
		}
		err = os.Chdir(workingDir)
		if err != nil {
			log.Fatal(err)
		}
	}
	if len(configPaths) == 0 && len(configDirectories) == 0 {
		configPaths = append(configPaths, "config.json")
	}
}

// newBoxContext builds a fresh, self-contained context for a single sing-box
// instance: a background context carrying the service registry (the include.*
// type registries, installed via box.Context), the deprecated-feature manager,
// and — under sudo — the file-manager default.
//
// Each call returns an independent context with its own service.Registry, and
// that independence is the point. boxbox.New reuses whatever registry it finds in
// its context and mutates it via service.MustRegister (e.g. registering the box's
// OutboundManager). If several boxes are created concurrently from one shared
// context — as happened when Create derived from the package-global globalCtx that
// preRun rewrote on every call — they share a single registry, and each box's
// MustRegister[OutboundManager] overwrites the previous box's. A later
// service.FromContext[OutboundManager] then returns the wrong box's manager, so a
// parallel URL test panics with "no outbound with tag ... found". Building the
// context per box keeps concurrent test instances fully isolated.
func newBoxContext() context.Context {
	ctx := context.Background()
	sudoUser := os.Getenv("SUDO_USER")
	sudoUID, _ := strconv.Atoi(os.Getenv("SUDO_UID"))
	sudoGID, _ := strconv.Atoi(os.Getenv("SUDO_GID"))
	if sudoUID == 0 && sudoGID == 0 && sudoUser != "" {
		sudoUserObject, _ := user.Lookup(sudoUser)
		if sudoUserObject != nil {
			sudoUID, _ = strconv.Atoi(sudoUserObject.Uid)
			sudoGID, _ = strconv.Atoi(sudoUserObject.Gid)
		}
	}
	if sudoUID > 0 && sudoGID > 0 {
		ctx = filemanager.WithDefault(ctx, "", "", sudoUID, sudoGID)
	}
	ctx = service.ContextWith(ctx, deprecated.NewStderrManager(log.StdLogger()))
	ctx = box.Context(ctx, include.InboundRegistry(), include.OutboundRegistry(), include.EndpointRegistry(), include.DNSTransportRegistry(), include.ServiceRegistry(), include.CertificateProviderRegistry())
	return ctx
}
