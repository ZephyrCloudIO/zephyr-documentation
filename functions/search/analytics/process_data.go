package analytics

import (
	"time"

	"github.com/aws/aws-lambda-go/events"
)

type Results struct {
	EventType string `json:"eventType"` // Type of event, e.g., "search_query"
	Name      string `json:"name"`      //  hashed result of `ze-`, device and ip
	Device    string `json:"device"`    // Device type (parsed from User-Agent)
	Origin    string `json:"origin"`    // Origin of the request (e.g., referrer or source page)
	Timestamp int64  `json:"timestamp"` // Unix timestamp for precise event timing
	Category  string `json:"category"`  // Category of the query (e.g., documentation, tutorial)
	Query     string `json:"query"`     // The actual search query string
	UserIP    string `json:"userIP"`    // IP address of the user
	RequestID string `json:"requestID"` // request ID from API gateway
}

const (
	eventType = "docs:search:query"
	category  = "docs"
)

func ProcessData(query string, req *events.APIGatewayProxyRequest) *Results {

	userAgent := req.Headers["User-Agent"]

	if userAgent == "" {
		userAgent = req.RequestContext.Identity.UserAgent
	}

	ip := req.Headers["X-Forwarded-For"]

	result := &Results{
		EventType: eventType,
		Name:      Hashing(userAgent, ip),
		Timestamp: time.Now().Unix(),
		Device:    userAgent,
		Origin:    req.RequestContext.ResourceID,
		Category:  category,
		Query:     query,
		UserIP:    ip,
		RequestID: req.RequestContext.RequestID,
	}

	return result
}

func CompressingData(query string, req *events.APIGatewayProxyRequest) {

}
