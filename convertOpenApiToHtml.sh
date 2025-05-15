docker run --rm \
  -v $(pwd)/docs:/docs \
  redocly/cli \
  build-docs /docs/test-openapi.yaml -o /docs/output/openapi/index.html
