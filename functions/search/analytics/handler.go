package analytics

import (
	"fmt"

	"github.com/aws/aws-lambda-go/events"
)

func SubmissionHandler(query string, req *events.APIGatewayProxyRequest) {
	app := NewRelicGoTracingInit()

	fmt.Println("we hit submission handler")

	data := ProcessData(query, req)

	app.RecordCustomEvent(EventType, data)
}
