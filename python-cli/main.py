import sys

from pyfiglet import Figlet
from PyInquirer import prompt

from transifex.native import init as tx_init
from transifex.native import tx


def main():
    print("Welcome to")
    print(Figlet().renderText("Transifex Native"))

    print("Fetching translations... ", end="")
    sys.stdout.flush()
    tx_init(token="1/066926bd75f0d9e52fce00c2208ac791ca0cd2c1",
            languages=['en', 'el', 'de', 'es', 'fr', 'pt_BR'])
    tx.fetch_translations()
    print("Done\n")

    try:
        while True:
            loop()
    except (KeyboardInterrupt, KeyError):
        print("Goodbye")


def loop():
    string_type = prompt([{
        'type': "list",
        'name': "string_type",
        'message': ("What kind of text would you like to see translated? "
                    "(press ctrl-c to quit)"),
        'choices': ["Static text",
                    "Dynamic text",
                    "Pluralized text",
                    "Choice"],
    }])['string_type']

    if string_type == "Static text":
        language_code, language_name = _get_language()
        print("\nTranslating {} to {}".
              format(string_type.lower(), language_name))
        print("Source string: ", "Hello world")
        print("Translation:   ", tx.translate("Hello world", language_code))

    elif string_type == "Dynamic text":
        string_parameter = prompt([{
            'type': "input",
            'name': "string_parameter",
            'message': "What should the dynamic part of the string be?",
        }])['string_parameter']
        language_code, language_name = _get_language()
        print("\nTranslating {} to {}".
              format(string_type.lower(), language_name))
        print("Source string: ", "Hello {}".format(string_parameter))
        print("Translation:   ",
              tx.translate("Hello {username}",
                           language_code,
                           params={'username': string_parameter}))

    elif string_type == "Pluralized text":
        number_parameter = prompt([{
            'type': "input",
            'name': "number_parameter",
            'message': "Choose a number",
            'validate': _validate_number,
        }])['number_parameter']
        language_code, language_name = _get_language()
        print("\nTranslating {} to {}".
              format(string_type.lower(), language_name))
        print("Source string: ", "You have one message / You have X messages")
        print(
            "Translation:   ",
            tx.translate(
                "{cnt, plural, one {You have one message} "
                "other {You have # messages}}",
                language_code,
                params={'cnt': number_parameter},
            ),
        )

    elif string_type == "Choice":
        choice_parameter = prompt([{
            'type': "list",
            'name': "choice_parameter",
            'message': "Make a choice",
            'choices': ["Male", "Female", "Other"]
        }])['choice_parameter']
        language_code, language_name = _get_language()
        print("\nTranslating {} to {}".
              format(string_type.lower(), language_name))
        print("Source string: ", "Daniel is a boy/girl/person")
        print(
            "Translation:   ",
            tx.translate(
                "{gender, select, "
                "male {Daniel is a boy} "
                "female {Daniel is a girl} "
                "other {Daniel is a person}}",
                language_code,
                params={'gender': choice_parameter.lower()},
            ),
        )

    print()


def _get_language():
    answer = prompt([{
        'type': "list",
        'name': "language_name",
        'message': "What language would you like to translate to?",
        'choices': ["Greek", "German", "Spanish", "French",
                    "Portuguese (Brazil)"],
    }])
    return ({'Greek': "el",
             'German': "de",
             'Spanish': "es",
             'French': "fr",
             'Portuguese (Brazil)': "pt_BR"}[answer['language_name']],
            answer['language_name'])


def _validate_number(string):
    try:
        int(string)
    except ValueError:
        return False
    return True


if __name__ == "__main__":
    main()
