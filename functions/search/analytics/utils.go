package analytics

import (
	"crypto/sha256"
	"encoding/base64"
	"encoding/hex"
	"encoding/json"
	"strings"

	"github.com/aws/aws-lambda-go/events"
	"github.com/google/uuid"
)

// var CookieName = "_ZE-SESSION"

func GenerateSessionID() string {
	return uuid.New().String()
}

func Hashing(content ...string) string {

	concatenatedContent := strings.Join(content, "")

	hash := sha256.New()

	hash.Write([]byte(concatenatedContent))

	return hex.EncodeToString(hash.Sum(nil))

}

type GeoData struct {
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

func GetGeoDataFromHeader(r *events.APIGatewayProxyRequest) (*GeoData, error) {
	geoHeader := r.Headers["x-nf-geo"]
	if geoHeader == "" {
		return nil, nil // No geo information available
	}

	decodedData, err := base64.StdEncoding.DecodeString(geoHeader)
	if err != nil {
		return nil, err
	}

	var geoData GeoData
	err = json.Unmarshal(decodedData, &geoData)
	if err != nil {
		return nil, err
	}

	return &geoData, nil
}
