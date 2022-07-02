#!/bin/sh -x

mkdir -p public

if [ -z "$1"]
then
    for dir in openapi/*/; do
        dir=${dir%*/}
        service=${dir##*/}

        echo "Build for [${service}]"
        eval "redoc-cli build openapi/${service}/openapi.yaml -o public/${service}.html"
    done
else
    echo "Build for [${1}]"
    eval "redoc-cli build openapi/${1}/openapi.yaml -o public/${1}.html"
fi
