package analytics

import (
	"compress/gzip"
	"context"
	"encoding/json"
	"io"
	"log"
	"net/http"
	"strings"

	"github.com/aws/aws-lambda-go/events"
)

func SubmissionHandler(query string, ctx context.Context, req *events.APIGatewayProxyRequest) (int, error) {
	//app := NewRelicGoTracingInit()

	an := Init()

	data := ProcessDataToJson(query, req)

	var sdkData map[string]interface{}

	err := json.Unmarshal(data, &sdkData)
	if err != nil {
		log.Printf("Error unmarshal data: %s", err)

		return http.StatusInternalServerError, err
	}

	_, err = an.ApiSubmissionRequest(data, ctx)

	if err != nil {
		return http.StatusInternalServerError, err
	}
	return http.StatusOK, nil

}

func (an *NewRelicClient) ApiSubmissionRequest(data []byte, ctx context.Context) (int, error) {

	httpClient := &http.Client{}

	request := an.CompressionRequest(data, ctx)

	response, err := httpClient.Do(request)

	if err != nil {
		log.Printf("Failed to submit data to New Relic: %s", err)

		return http.StatusInternalServerError, err
	}
	defer response.Body.Close()

	if response.StatusCode == http.StatusOK {
		log.Println("Successfully submitted data to New Relic", response)
	} else {
		log.Println("Failed to submit data")
		return http.StatusInternalServerError, nil
	}

	body, err := io.ReadAll(response.Body)
	if err != nil {
		log.Printf("Failed to read response body from New Relic: %s", err)

		return http.StatusInternalServerError, err
	}

	log.Printf("Response from New Relic: %s", string(body))

	return http.StatusAccepted, nil

}

func (an *NewRelicClient) CompressionRequest(body []byte, ctx context.Context) *http.Request {

	pr, pw := io.Pipe()

	go func() {
		gw := gzip.NewWriter(pw)
		err := json.NewEncoder(gw).Encode(body)

		defer gw.Close()
		defer pw.CloseWithError(err)

	}()

	body, err := io.ReadAll(pr)
	if err != nil {
		log.Printf("Failed to read data from PipeReader: %s", err)
		return nil
	}
	data := strings.NewReader(string(body))

	r, err := http.NewRequestWithContext(ctx, "POST", an.EventEndpoint, data)

	if err != nil {
		log.Printf("Creating new request with context failed while submitting events through API: %s", err)
	}

	r.Header.Set("Content-Type", "application/json")
	r.Header.Set("Api-Key", an.LicenseKey)
	r.Header.Set("Content-Encoding", "gzip")

	return r

}
