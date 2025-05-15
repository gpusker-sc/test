
    const schema = {
  "asyncapi": "2.6.0",
  "info": {
    "title": "Example User Events API",
    "version": "1.0.0",
    "description": "Example AsyncAPI spec for user events via AWS SQS."
  },
  "servers": {
    "production": {
      "url": "https://sqs.us-east-1.amazonaws.com/123456789012/example-queue",
      "protocol": "sqs"
    }
  },
  "channels": {
    "user-created": {
      "description": "Channel for 'user created' events.",
      "subscribe": {
        "summary": "Receive notification when a user is created.",
        "message": {
          "name": "UserCreated",
          "payload": {
            "type": "object",
            "properties": {
              "id": {
                "type": "string",
                "description": "Unique identifier for the user.",
                "x-parser-schema-id": "<anonymous-schema-2>"
              },
              "name": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-3>"
              },
              "email": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-4>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-1>"
          }
        }
      }
    }
  },
  "components": {
    "messages": {
      "UserCreated": {
        "payload": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string",
              "x-parser-schema-id": "<anonymous-schema-6>"
            },
            "name": {
              "type": "string",
              "x-parser-schema-id": "<anonymous-schema-7>"
            },
            "email": {
              "type": "string",
              "x-parser-schema-id": "<anonymous-schema-8>"
            }
          },
          "x-parser-schema-id": "<anonymous-schema-5>"
        },
        "x-parser-message-name": "UserCreated"
      }
    }
  },
  "x-parser-spec-parsed": true,
  "x-parser-api-version": 3,
  "x-parser-spec-stringified": true
};
    const config = {"show":{"sidebar":true},"sidebar":{"showOperations":"byDefault"}};
    const appRoot = document.getElementById('root');
    AsyncApiStandalone.render(
        { schema, config, }, appRoot
    );
  