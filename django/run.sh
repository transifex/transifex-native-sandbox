#!/bin/env sh
if [ ! -d venv ]; then
  echo Creating virtual environment \'venv\'
  python -m venv venv
fi;

source venv/bin/activate
if [ ! -d venv/lib/python3.8/site-packages/transifex ]; then
  pip install -r requirements.txt
fi
python manage.py migrate
python manage.py runserver
