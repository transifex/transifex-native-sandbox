#!/bin/env sh
if [ ! -d node_modules ]; then
  echo Installing dependencies
  npm install
fi
npm run web
