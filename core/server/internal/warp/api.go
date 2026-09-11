package warp

import (
	"bytes"
	"context"
	"encoding/json"
	"io"
	"net/http"
	"net/url"
	"strings"

	E "github.com/sagernet/sing/common/exceptions"
)

const (
	apiBase       = "https://api.cloudflareclient.com/v0a4471"
	clientVersion = "a-6.35-4471"
	userAgent     = "WARP for Android"
	maxBodySize   = 1 << 20
)

type registerRequest struct {
	Key          string `json:"key"`
	InstallID    string `json:"install_id"`
	FCMToken     string `json:"fcm_token"`
	TOS          string `json:"tos"`
	Model        string `json:"model"`
	SerialNumber string `json:"serial_number"`
	KeyType      string `json:"key_type"`
	TunnelType   string `json:"tunnel_type"`
	Locale       string `json:"locale"`
}

type updateKeyRequest struct {
	Key        string `json:"key"`
	KeyType    string `json:"key_type"`
	TunnelType string `json:"tunnel_type"`
}

type device struct {
	ID      string `json:"id"`
	Token   string `json:"token"`
	Account struct {
		License string `json:"license"`
	} `json:"account"`
	Config struct {
		ClientID  string `json:"client_id"`
		Interface struct {
			Addresses struct {
				V4 string `json:"v4"`
				V6 string `json:"v6"`
			} `json:"addresses"`
		} `json:"interface"`
		Peers []struct {
			PublicKey string `json:"public_key"`
			Endpoint  struct {
				Host string `json:"host"`
				V4   string `json:"v4"`
				V6   string `json:"v6"`
			} `json:"endpoint"`
		} `json:"peers"`
	} `json:"config"`
}

type apiError struct {
	Errors []struct {
		Code    int    `json:"code"`
		Message string `json:"message"`
	} `json:"errors"`
}

type client struct {
	httpClient *http.Client
}

func newClient(proxy string) (*client, error) {
	transport := http.DefaultTransport.(*http.Transport).Clone()
	transport.Proxy = nil
	if proxy != "" {
		proxyURL, err := url.Parse(proxy)
		if err != nil {
			return nil, E.Cause(err, "parse proxy")
		}
		transport.Proxy = http.ProxyURL(proxyURL)
	}
	return &client{httpClient: &http.Client{Transport: transport}}, nil
}

func (c *client) Close() {
	c.httpClient.CloseIdleConnections()
}

func (c *client) call(ctx context.Context, method string, path string, token string, body any) (*device, error) {
	content, err := json.Marshal(body)
	if err != nil {
		return nil, err
	}
	request, err := http.NewRequestWithContext(ctx, method, apiBase+path, bytes.NewReader(content))
	if err != nil {
		return nil, err
	}
	request.Header.Set("User-Agent", userAgent)
	request.Header.Set("CF-Client-Version", clientVersion)
	request.Header.Set("Content-Type", "application/json; charset=UTF-8")
	if token != "" {
		request.Header.Set("Authorization", "Bearer "+token)
	}
	response, err := c.httpClient.Do(request)
	if err != nil {
		return nil, err
	}
	defer response.Body.Close()
	content, err = io.ReadAll(io.LimitReader(response.Body, maxBodySize))
	if err != nil {
		return nil, E.Cause(err, "read response")
	}
	if response.StatusCode < 200 || response.StatusCode >= 300 {
		return nil, responseError(response, content)
	}
	var result device
	err = json.Unmarshal(content, &result)
	if err != nil {
		return nil, E.Cause(err, "decode response")
	}
	return &result, nil
}

func responseError(response *http.Response, content []byte) error {
	if response.StatusCode == http.StatusTooManyRequests {
		return E.New("rate limited by Cloudflare, try again later")
	}
	var apiErr apiError
	if json.Unmarshal(content, &apiErr) == nil {
		var messages []string
		for _, item := range apiErr.Errors {
			if item.Message != "" {
				messages = append(messages, item.Message)
			}
		}
		if len(messages) > 0 {
			return E.New(response.Status, ": ", strings.Join(messages, "; "))
		}
	}
	return E.New(response.Status)
}
