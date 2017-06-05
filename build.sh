#!/bin/bash

set -e

echo "STEP 0: clean dist dir";
rm -rf dist/*

echo "STEP 1: build js bundles";
./node_modules/.bin/webpack --config webpack.config.js

echo "STEP 2: copy html/css to dist/";
rsync -av src/ dist/ --exclude='*.js' --exclude='*.vue'

echo 'SUCCESS';
