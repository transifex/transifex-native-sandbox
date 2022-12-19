This is a [Django](https://www.djangoproject.com/) application integrated with
[Transifex Native](https://docs.transifex.com/transifex-native-sdk-overview/introduction).

## Getting started

You need a "reasonably recent" version of python/pip to run this application.

In order to get started, you can run:


```sh
sh run.sh
```

Or, by hand:

```sh
# Make a new virtual environment called 'venv'
python -m venv venv

# Activate the virtual environment
source venv/bin/activate

# Install the necessary libraries (only needed the first time)
pip install -r requirements.txt

# Setup the database (only needed the first time)
python manage.py migrate

# Start the server
python manage.py runserver
```

_If the first command (`python -m venv venv`) fails, it may be that your python
version is old and doesn't have the `venv` module. You can use the
[`virtualenv`](https://virtualenv.pypa.io/en/latest/) library to achieve the
same thing. Usually `virtualenv` can be downloaded with your operating system's
package manager, otherwise please consult the
[installation docs](https://virtualenv.pypa.io/en/latest/installation.html).
After that, you will be able to create your virtual environment with
`virtualenv venv` (ie replace `python -m venv` with `virtualenv`)_

Now, you can visit the application in the browser (http://localhost:8000),
change the languages using the language picker and see the translations being
rendered every time you refresh your browser.

## Where to go from here

### Play with the interactive parts of the page

Change the various inputs to see how the final texts are being rendered. Also
change the selected language using the language picker and see the texts being
translated in real time.

### Edit translations

Head over to the
[linked transifex project](https://www.transifex.com/transifex/native-sandbox/dashboard/),
join a language team and help complete or edit the translations. Then head back
into the application, refresh and see the changes you made appear over-the-air
(there may be a delay before the new translations become available to your
application).

### Edit the content of the application and push

Open the `django_app/views.py` and `django_app/templates/main.html` files
and try adding some new strings using the
[T-tag and t-function](https://docs.transifex.com/django-sdk/templates-and-views).
Then push to transifex by running:

```sh
sh push.sh
```

Or, if you want to do it by hand using the
[cli](https://docs.transifex.com/django-sdk/uploading-source-content-to-transifex):

```sh
python manage.py transifex push
```
