if [ ! -d venv ]; then
  echo Creating virtual environment \'venv\'
  python -m venv venv
fi;

source venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
