This is an interactive command-line application written in Python to help
demonstrate
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


# Run the application
python main.py
```

_If the first command (`python -m venv venv`) fails, it may be that your python
version is old and doesn't have the `venv` module. You can use the
[`virtualenv`](https://virtualenv.pypa.io/en/latest/) library to achieve the
same thing. Usually `virtualenv` can be downloaded with your operating system's
package manager, otherwise please consult the
[installation docs](https://virtualenv.pypa.io/en/latest/installation.html).
After that, you will be able to create your virtual environment with
`virtualenv venv` (ie replace `python -m venv` with `virtualenv`)_

## Where to go from here

### Play with the interactive parts of the page

Experiment with different choices and see the results.

### Edit translations

Head over to the
[linked transifex project](https://www.transifex.com/native-sandbox/main-native-sandbox/),
join a language team and help complete or edit the translations. Then head back
into the application, refresh and see the changes you made appear over-the-air
(there may be a delay before the new translations become available to the
application).
