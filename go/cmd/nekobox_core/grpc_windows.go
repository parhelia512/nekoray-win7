package main

import (
	"context"
	"github.com/Mahdi-zarei/sing-box-extra/boxdns"
	"grpc_server/gen"
	"net/netip"
)

func (s *server) GetSystemDNS(ctx context.Context, in *gen.EmptyReq) (*gen.GetSystemDNSResponse, error) {
	servers, dhcp, err := boxdns.GetDefaultDNS()
	if err != nil {
		return nil, err
	}

	stringServers := make([]string, 0)
	for _, server := range servers {
		stringServers = append(stringServers, server.String())
	}

	return &gen.GetSystemDNSResponse{
		Servers: stringServers,
		IsDhcp:  dhcp,
	}, nil
}

func (s *server) SetSystemDNS(ctx context.Context, in *gen.SetSystemDNSRequest) (*gen.EmptyResp, error) {
	var servers []netip.Addr
	for _, server := range in.Servers {
		s, err := netip.ParseAddr(server)
		if err != nil {
			return nil, err
		}
		servers = append(servers, s)
	}
	err := boxdns.SetDefaultDNS(servers, in.SetDhcp, in.Clear)
	if err != nil {
		return nil, err
	}

	return &gen.EmptyResp{}, nil
}
