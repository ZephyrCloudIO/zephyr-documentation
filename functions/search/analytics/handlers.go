package analytics

import (
	"bytes"
	"compress/gzip"
	"context"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"

	"github.com/aws/aws-lambda-go/events"
)

type Query struct {
	Content string `json:"content"`
}

func SubmissionHandler(query Query, ctx context.Context, req *events.APIGatewayProxyRequest) (int, error) {
	//app := NewRelicGoTracingInit()

	an := Init()

	data := ProcessDataToJson(query, req)

	_, err := an.ApiSubmissionRequest(data, ctx)

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

	var fileGZ bytes.Buffer
	zipper := gzip.NewWriter(&fileGZ)

	_, err := zipper.Write(body)
	if err != nil {
		log.Fatalf("zipper.Write ERROR: %+v", err)
	}
	zipper.Close() // call it explicitly

	// checking if this file output is correct
	err = os.WriteFile(FilePath, fileGZ.Bytes(), 0644)
	if err != nil {
		fmt.Printf("WriteFileGZ ERROR: %+v", err)
	}

	file, err := os.Open(FilePath)
	if err != nil {
		fmt.Printf("failed to open file: %v", err)
	}
	defer file.Close()

	var buf bytes.Buffer
	gzipWriter := gzip.NewWriter(&buf)

	// Copy the file content to the gzip writer
	_, err = io.Copy(gzipWriter, file)
	if err != nil {
		fmt.Printf("failed to gzip file content: %v", err)
	}

	// Close the gzip writer to flush all data
	if err := gzipWriter.Close(); err != nil {
		fmt.Printf("failed to close gzip writer: %v", err)
	}

	r, err := http.NewRequest("POST", an.EventEndpoint, &buf)

	if err != nil {
		log.Printf("Creating new request with context failed while submitting events through API: %s", err)
	}

	r.Header.Set("Content-Type", "application/json")
	r.Header.Set("Api-Key", an.LicenseKey)
	r.Header.Set("Content-Encoding", "gzip")

	return r

}
