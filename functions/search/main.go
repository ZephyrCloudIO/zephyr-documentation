package main

import (
	"context"
	"encoding/json"

	an "github.com/ZephyrCloudIO/docs/search/analytics"
	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
)

func handler(ctx context.Context, req *events.APIGatewayProxyRequest) (*events.APIGatewayProxyResponse, error) {

	headers := map[string]string{
		"Access-Control-Allow-Origin":  "*",
		"Access-Control-Allow-Headers": "Content-Type",
		"Content-Type":                 "application/json; text/html; charset=utf-8",
	}

	var query an.Query

	json.Unmarshal([]byte(req.Body), &query)

	if req.HTTPMethod == "OPTIONS" || req.HTTPMethod == "POST" {

		_, err := an.SubmissionHandler(query, ctx, req)

		if err != nil {
			return &events.APIGatewayProxyResponse{
				StatusCode:      500,
				Headers:         headers,
				Body:            req.Body,
				IsBase64Encoded: false,
			}, nil
		}

		return &events.APIGatewayProxyResponse{
			StatusCode:      200,
			Headers:         headers,
			Body:            req.Body,
			IsBase64Encoded: false,
		}, nil
	}

	return &events.APIGatewayProxyResponse{
		StatusCode:      200,
		Headers:         map[string]string{"Content-Type": "text/plain"},
		Body:            req.Body,
		IsBase64Encoded: false,
	}, nil
}

func main() {

	lambda.Start(handler)
}
