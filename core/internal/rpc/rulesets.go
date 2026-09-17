package rpc

import (
	"context"
	"slices"
	"strings"
	"sync"
	"time"

	"ThroneCore/gen"

	"github.com/sagernet/sing-box/adapter"
)

const (
	ruleSetUpdateTimeout     = 60 * time.Second
	ruleSetUpdateConcurrency = 5
)

func (s *server) UpdateRuleSets(ctx context.Context, in *gen.EmptyReq) (*gen.UpdateRuleSetsResponse, error) {
	box := currentBox()
	if box == nil {
		return &gen.UpdateRuleSetsResponse{Error: To("no instance is running")}, nil
	}
	ctx, cancel := context.WithTimeout(ctx, ruleSetUpdateTimeout)
	defer cancel()

	var resultMu sync.Mutex
	var updated int32
	var failures []string
	slots := make(chan struct{}, ruleSetUpdateConcurrency)
	var wg sync.WaitGroup
	for _, ruleSet := range box.Router().RuleSets() {
		updatable, ok := ruleSet.(adapter.UpdatableRuleSet)
		if !ok {
			continue
		}
		wg.Add(1)
		go func() {
			defer wg.Done()
			slots <- struct{}{}
			defer func() { <-slots }()
			err := updatable.Update(ctx)
			resultMu.Lock()
			defer resultMu.Unlock()
			if err != nil {
				failures = append(failures, updatable.Name()+": "+err.Error())
				return
			}
			updated++
		}()
	}
	wg.Wait()
	slices.Sort(failures)
	return &gen.UpdateRuleSetsResponse{Updated: To(updated), Error: To(strings.Join(failures, "\n"))}, nil
}
