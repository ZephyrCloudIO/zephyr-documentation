package analytics

import (
	"encoding/json"
	"fmt"
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

type ResultsJson struct {
	EventType       string  `json:"eventType"`  // Type of event, e.g., "search_query"
	Name            string  `json:"name"`       // hashed result of `ze-`, device and ip
	Device          string  `json:"device"`     // Device type (parsed from User-Agent)
	Origin          string  `json:"origin"`     // Origin of the request (e.g., referrer or source page)
	Timestamp       int64   `json:"timestamp"`  // Unix timestamp for precise event timing
	Category        string  `json:"category"`   // Category of the query (e.g., documentation, tutorial)
	Query           string  `json:"query"`      // The actual search query string
	UserIP          string  `json:"user_ip"`    // IP address of the user
	RequestID       string  `json:"request_id"` // request ID from API gateway
	City            string  `json:"city"`       // TODO: we might not need this
	CountryName     string  `json:"countryName"`
	CountryCode     string  `json:"countryCode"`
	SubdivisionName string  `json:"subdivisionName"`
	SubdivisionCode string  `json:"subdivisionCode"`
	Timezone        string  `json:"timezone"`
	Latitude        float64 `json:"latitude"`
	Longitude       float64 `json:"longitude"`
}

const (
	EventType        = "DocSearch"
	Category         = "docs"
	FilePath  string = "output.json.gz"
)

func ProcessDataToJson(query Query, req *events.APIGatewayProxyRequest) []byte {

	userAgent := req.Headers["User-Agent"]

	if userAgent == "" {
		userAgent = req.RequestContext.Identity.UserAgent
	}

	if userAgent == "" {
		userAgent = req.Headers["user-agent"]
	}

	ip := req.Headers["X-Forwarded-For"]

	if ip == "" {
		ip = req.Headers["client-ip"]
	}

	geoData, err := GetGeoDataFromHeader(req)

	if err != nil {
		geoData = &GeoData{}
		log.Println("Couldn't get Geo information")
	}

	result := &ResultsJson{
		EventType:       EventType,
		Name:            Hashing(userAgent, ip),
		Timestamp:       time.Now().UnixMilli(),
		Device:          userAgent,
		Origin:          req.RequestContext.ResourceID,
		Category:        Category,
		Query:           query.Content,
		UserIP:          ip,
		RequestID:       req.RequestContext.RequestID,
		City:            geoData.City,
		CountryName:     geoData.Country.Name,
		CountryCode:     geoData.Country.Code,
		SubdivisionName: geoData.Subdivision.Name,
		SubdivisionCode: geoData.Subdivision.Code,
		Timezone:        geoData.Timezone,
		Latitude:        geoData.Latitude,
		Longitude:       geoData.Longitude,
	}

	fmt.Printf("Json Results: %v\n", result)

	body, err := json.Marshal(result)

	if err != nil {
		log.Printf("Processing json data failed: %s", err)
	}

	return body
}
