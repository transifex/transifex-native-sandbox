#!/bin/env sh
if [ ! -d node_modules ]; then
  echo Installing dependencies
  npm ci
fi
npm start
