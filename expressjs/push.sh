#!/bin/env sh
export TRANSIFEX_TOKEN='1/ff0741fd8174546b4cf42c75ee9cc12f0b6af504'
export TRANSIFEX_SECRET='1/9bd7ad8531cf7e0c3faec7c1e523c20df9b12e32'
npx txjs-cli push --verbose index.js
npx txjs-cli push --verbose views

