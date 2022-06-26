# build standalone html api doc
# - for one service: make build service={service_name}
# - for all services: make build
build:
	./bin/build.sh $(service)
