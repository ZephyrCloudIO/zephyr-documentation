package analytics

import (
	"log"
	"time"

	"github.com/aws/aws-lambda-go/events"
)

type Results struct {
	EventType string // Type of event, e.g., "search_query"
	Name      string //  hashed result of `ze-`, device and ip
	Device    string // Device type (parsed from User-Agent)
	Origin    string // Origin of the request (e.g., referrer or source page)
	Timestamp string // Unix timestamp for precise event timing
	Category  string // Category of the query (e.g., documentation, tutorial)
	Query     string // The actual search query string
	UserIP    string // IP address of the user
	RequestID string // request ID from API gateway
	// TODO: we might not need this
	City    string
	Country struct {
		Code string
		Name string
	}
	Subdivision struct {
		Code string
		Name string
	}
	Timezone  string
	Latitude  float64
	Longitude float64
}

const (
	EventType = "docs:search:query"
	Category  = "docs"
)

func resultsToMap(r *Results) map[string]interface{} {
	return map[string]interface{}{
		"EventType":        r.EventType,
		"Name":             r.Name,
		"Device":           r.Device,
		"Origin":           r.Origin,
		"Timestamp":        r.Timestamp,
		"Category":         r.Category,
		"Query":            r.Query,
		"UserIP":           r.UserIP,
		"RequestID":        r.RequestID,
		"City":             r.City,
		"Country.Code":     r.Country.Code,
		"Country.Name":     r.Country.Name,
		"Subdivision.Code": r.Subdivision.Code,
		"Subdivision.Name": r.Subdivision.Name,
		"Timezone":         r.Timezone,
		"Latitude":         r.Latitude,
		"Longitude":        r.Longitude,
	}
}

func ProcessData(query string, req *events.APIGatewayProxyRequest) map[string]interface{} {

	userAgent := req.Headers["User-Agent"]

	if userAgent == "" {
		userAgent = req.RequestContext.Identity.UserAgent
	}

	ip := req.Headers["X-Forwarded-For"]

	geoData, err := GetGeoDataFromHeader(req)

	if err != nil {
		geoData = &GeoData{}
		log.Println("Couldn't get Geo information")
	}

	result := &Results{
		EventType:   EventType,
		Name:        Hashing(userAgent, ip),
		Timestamp:   time.Now().Format(time.RFC3339),
		Device:      userAgent,
		Origin:      req.RequestContext.ResourceID,
		Category:    Category,
		Query:       query,
		UserIP:      ip,
		RequestID:   req.RequestContext.RequestID,
		City:        geoData.City,
		Country:     geoData.Country,
		Subdivision: geoData.Subdivision,
		Timezone:    geoData.Timezone,
		Latitude:    geoData.Latitude,
		Longitude:   geoData.Longitude,
	}

	return resultsToMap(result)
}
