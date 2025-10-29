#!/bin/env sh
if [ ! -d venv ]; then
  echo Creating virtual environment \'venv\'
  python3 -m venv venv
fi;

source venv/bin/activate
if [ ! -d venv/lib/python*/site-packages/transifex ]; then
  pip install -r requirements.txt
fi
python3 manage.py transifex push --verbose
