#!/bin/env sh
if [ ! -d node_modules ]; then
  echo Installing dependencies
  yarn install
fi
yarn serve
