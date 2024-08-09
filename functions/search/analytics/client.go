package analytics

import (
	"bytes"
	"fmt"
	"log"
	"os"
)

type NewRelicClient struct {
	// used for API endpoint tracking
	AccountId     string
	LicenseKey    string
	EventEndpoint string
}

func Cred() *NewRelicClient {
	var cred *NewRelicClient = &NewRelicClient{
		AccountId:     os.Getenv("NEW_RELIC_ACCOUNT_ID"),
		LicenseKey:    os.Getenv("NEW_RELIC_LICENSE_KEY"),
		EventEndpoint: os.Getenv("NEW_RELIC_EVENT_ENDPOINT"),
	}

	return cred
}

func Logger(msg string) {
	var (
		buf    bytes.Buffer
		logger = log.New(&buf, "logger: ", log.Lshortfile)
	)

	logger.Print(msg)

	fmt.Print(&buf)
}

// Make sure all environment variables exists
func (nrc *NewRelicClient) checkStructErrors() {
	if len(nrc.LicenseKey) < 1 {
		panic("New Relic License Key Error: invalid License Key in environment.")
	}

	if len(nrc.AccountId) < 1 {
		panic("New Relic Account ID Error: invalid Account Id in environment.")
	}

	if len(nrc.EventEndpoint) < 1 {
		panic("New Relic Event Endpoint Error: invalid event endpoint in environment.")
	}

}

func (nrc *NewRelicClient) constructEventEndpoint(url []byte) string {
	urlEle := [][]byte{url, []byte(nrc.AccountId), []byte("events")}
	separator := []byte("/")
	url = bytes.Join(urlEle, separator)

	return string(url)
}

func NewRelicInit(nrc *NewRelicClient) *NewRelicClient {
	nrc.checkStructErrors()

	if len(nrc.EventEndpoint) < 60 {
		nrc.EventEndpoint = nrc.constructEventEndpoint([]byte(nrc.EventEndpoint))
	}

	return nrc
}

// using New Relic API endpoint to send events
func Init() *NewRelicClient {
	cred := Cred()

	return NewRelicInit(&NewRelicClient{
		AccountId:     cred.AccountId,
		LicenseKey:    cred.LicenseKey,
		EventEndpoint: cred.EventEndpoint,
	})
}
