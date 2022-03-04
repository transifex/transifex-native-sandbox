#!/bin/env sh
export TRANSIFEX_TOKEN='1/066926bd75f0d9e52fce00c2208ac791ca0cd2c1'
export TRANSIFEX_SECRET='1/f5aca18b0d44d660976a69617d9a06edf3fb9c47'
npx txjs-cli push --verbose index.js
npx txjs-cli push --verbose views

