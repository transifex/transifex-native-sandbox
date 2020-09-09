from django.shortcuts import render

from transifex.native.django import t, ut


def django_view(request):
    params = {'string': "John Doe", 'number': 1, 'choice': "female"}
    params.update(request.GET.items())

    python_strings = [
        ("Static content:", t("Hello world")),
        ("Dynamic content:", t("Hello {username}", username=params['string'])),
        ("Pluralized:",
         t("{cnt, plural, one {You have one message} other {You have # messages}}",  # noqa
           cnt=params['number'])),
        ("Choice:",
         t("{username} is a {gender, select, male {boy} female {girl} other {other}}",
           username=params['string'], gender=params['choice'])),
        ("Raw HTML:",
         ut('<em style="color:red">Hello</em><strong style="color:blue">{username}</strong>',  # noqa
            username=params['string'])),
    ]
    print(params)
    return render(request, "main.html", {'python_strings': python_strings,
                                         'params': params})
