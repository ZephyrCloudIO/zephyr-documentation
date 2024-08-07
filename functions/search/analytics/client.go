package analytics

import (
	"bytes"
	"fmt"
	"log"
	"os"

	"github.com/newrelic/go-agent/v3/integrations/nrlambda"
	"github.com/newrelic/go-agent/v3/integrations/nrlogrus"
	"github.com/newrelic/go-agent/v3/newrelic"
	"github.com/sirupsen/logrus"
)

type NewRelicClient struct {
	// used for API endpoint tracking
	AccountId     string
	LicenseKey    string
	EventEndpoint string
	// used for SDK
	LambdaAppName string
}

func Cred() *NewRelicClient {
	var cred *NewRelicClient = &NewRelicClient{
		AccountId:     os.Getenv("NEW_RELIC_ACCOUNT_ID"),
		LicenseKey:    os.Getenv("NEW_RELIC_LICENSE_KEY"),
		EventEndpoint: os.Getenv("NEW_RELIC_EVENT_ENDPOINT"),
		LambdaAppName: os.Getenv("NEW_RELIC_LAMBDA_APP_NAME"),
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

	if len(nrc.LambdaAppName) < 1 {
		panic("New Relic Lambda App Name Error: invalid app name in environment.")
	}

}

func (nrc *NewRelicClient) constructEventEndpoint(url []byte) string {
	urlEle := [][]byte{url, []byte(nrc.AccountId), []byte("events")}
	separator := []byte("/")
	url = bytes.Join(urlEle, separator)

	fmt.Println("url", url)

	return string(url)
}

func NewRelicInit(nrc *NewRelicClient) *NewRelicClient {
	nrc.checkStructErrors()

	if len(nrc.EventEndpoint) < 50 {
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

// Using New Relic SDK
/* Reference: https://pkg.go.dev/github.com/newrelic/go-agent/_integrations/nrlambda **/
func NewRelicGoTracingInit() *newrelic.Application {
	cred := Cred()

	app, err := newrelic.NewApplication(
		newrelic.ConfigAppName(cred.LambdaAppName),
		newrelic.ConfigLicense(cred.LicenseKey),
		nrlambda.ConfigOption(),
		newrelic.ConfigAppLogForwardingEnabled(true),
		newrelic.ConfigDistributedTracerEnabled(true),
		newrelic.ConfigCustomInsightsEventsEnabled(true),
		func(config *newrelic.Config) {
			logrus.SetLevel(logrus.DebugLevel)
			config.Logger = nrlogrus.StandardLogger()
		},
	)

	if err != nil {
		Logger("Failed to initialize New Relic Agent via SDK")
	}

	return app
}
