#!/bin/env sh
if [ ! -d venv ]; then
  echo Creating virtual environment \'venv\'
  python -m venv venv
fi;

source venv/bin/activate
if [ ! -d venv/lib/python*/site-packages/pyfiglet ]; then
  pip install -r requirements.txt
fi

python main.py
