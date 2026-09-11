package main

import (
	"ThroneCore/gen"
	"ThroneCore/internal/warp"
	"context"
	"time"
)

const warpRegisterTimeout = 30 * time.Second

func (s *server) WarpRegister(ctx context.Context, in *gen.WarpRegisterRequest) (*gen.WarpRegisterResponse, error) {
	ctx, cancel := context.WithTimeout(ctx, warpRegisterTimeout)
	defer cancel()
	identity, err := warp.Register(ctx, in.GetTunnelType(), in.GetProxy())
	if err != nil {
		return &gen.WarpRegisterResponse{Error: To(err.Error())}, nil
	}
	reserved := make([]int32, 0, len(identity.Reserved))
	for _, b := range identity.Reserved {
		reserved = append(reserved, int32(b))
	}
	return &gen.WarpRegisterResponse{
		DeviceId:      To(identity.DeviceID),
		Token:         To(identity.Token),
		License:       To(identity.License),
		Ipv4:          To(identity.IPv4),
		Ipv6:          To(identity.IPv6),
		PrivateKey:    To(identity.PrivateKey),
		PeerPublicKey: To(identity.PeerPublicKey),
		Endpoint:      To(identity.Endpoint),
		Reserved:      reserved,
	}, nil
}
