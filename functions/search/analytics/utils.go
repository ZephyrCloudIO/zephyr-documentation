package analytics

import (
	"crypto/sha256"
	"encoding/base64"
	"encoding/hex"
	"encoding/json"
	"net/http"
	"strings"

	"github.com/google/uuid"
)

var CookieName = "_ZE-SESSION"

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
	City    string `json:"city"`
	Country struct {
		Code string `json:"code"`
		Name string `json:"name"`
	} `json:"country"`
	Subdivision struct {
		Code string `json:"code"`
		Name string `json:"name"`
	} `json:"subdivision"`
	Timezone  string  `json:"timezone"`
	Latitude  float64 `json:"latitude"`
	Longitude float64 `json:"longitude"`
}

func GetGeoDataFromHeader(r *http.Request) (*GeoData, error) {
	geoHeader := r.Header.Get("x-nf-geo")
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
