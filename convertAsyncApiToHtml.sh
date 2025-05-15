docker run --rm -it \
  -v $(pwd)/docs:/docs \
  asyncapi/generator:latest \
  /docs/test-asyncapi.yaml @asyncapi/html-template -o /docs/output/asyncapi