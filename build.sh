#!/bin/bash
type=$1

# ts-node generate.ts   
# npx prettier  --write jsonschemas


if [ $type == 'frontend' ]; then
    simpleapp-generator -c config.json -g frontend
    cp -a ./sharelibs frontend/simpleapp/generate
elif [ $type == 'updatefrontend' ]; then
    simpleapp-generator -c config.json -g updatefrontend
    cp -a ./sharelibs frontend/simpleapp/generate
elif [ $type == 'backend' ]; then
    simpleapp-generator -c config.json -g backend
    cp -a ./sharelibs backend/src/simpleapp/generate
elif [ $type == 'updatebackend' ]; then
    simpleapp-generator -c config.json -g updatebackend
    cp -a ./sharelibs backend/src/simpleapp/generate
fi


