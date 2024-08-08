package main

import (
	"context"
	"fmt"

	an "github.com/ZephyrCloudIO/docs/search/analytics"
	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambdacontext"
	"github.com/newrelic/go-agent/v3/integrations/nrlambda"
)

func handler(ctx context.Context, req *events.APIGatewayProxyRequest) (*events.APIGatewayProxyResponse, error) {

	headers := map[string]string{
		"Access-Control-Allow-Origin":  "*",
		"Access-Control-Allow-Headers": "Content-Type",
		"Content-Type":                 "application/json; text/html; charset=utf-8",
	}

	lc, ok := lambdacontext.FromContext(ctx)

	if !ok {
		return &events.APIGatewayProxyResponse{
			StatusCode: 503,
			Body:       "Something went wrong :(",
		}, nil
	}

	cc := lc.ClientContext
	fmt.Println("request.Body.handler", req.Body)
	if req.HTTPMethod == "OPTIONS" {

		an.SubmissionHandler(req.Body, req)

		fmt.Println("request.Body.OPTIONS", req.Body)
		return &events.APIGatewayProxyResponse{
			StatusCode:      200,
			Headers:         headers,
			Body:            req.Body,
			IsBase64Encoded: false,
		}, nil
	}

	if req.HTTPMethod == "POST" {

		fmt.Println("request.Body.Post", req.Body)
		return &events.APIGatewayProxyResponse{
			StatusCode:      200,
			Headers:         headers,
			Body:            req.Body,
			IsBase64Encoded: false,
		}, nil
	}

	fmt.Println("client context", cc)

	return &events.APIGatewayProxyResponse{
		StatusCode:      200,
		Headers:         map[string]string{"Content-Type": "text/plain"},
		Body:            req.Body,
		IsBase64Encoded: false,
	}, nil
}

func main() {
	// Pass nrlambda.ConfigOption() into newrelic.NewApplication to set
	// Lambda specific configuration settings including
	// Config.ServerlessMode.Enabled.
	app := an.NewRelicGoTracingInit()

	txn := app.StartTransaction("zephyr:docs:functions:search")
	defer txn.End()

	//	nrlambda.Start should be used in place of lambda.Start.
	// nrlambda.StartHandler should be used in place of lambda.StartHandler.
	nrlambda.Start(handler, app)
	// http.HandleFunc(newrelic.WrapHandleFunc(app, "/users", usersHandler))

	// lambda.Start(handler)
}

// Run this command on where its deployed to enable infra and logs metrics

// curl -Ls https://download.newrelic.com/install/newrelic-cli/scripts/install.sh | bash && sudo NEW_RELIC_API_KEY=NRAK-W3I6A4U5AOFF6UOACO43VKVI52X NEW_RELIC_ACCOUNT_ID=4141664 /usr/local/bin/newrelic install -n logs-integration
