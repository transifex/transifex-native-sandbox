import urwid

from transifex.native import tx
from transifex.native.urwid import T, Variable, language_picker


def exit_on_q(key):
    if key in ('q', 'Q', 'esc'):
        raise urwid.ExitMainLoop()


def main():
    print("Fetching languages and source language content")
    tx.setup(
        # cds_host="http://localhost:10300",
        token="1/066926bd75f0d9e52fce00c2208ac791ca0cd2c1",
        source_language="en",
    )

    tx.fetch_languages()

    static_text = [urwid.Text("Static text"),
                   urwid.Text("  Source string: Hello world"),
                   T("Hello world", wrapper="  Translation  : {}")]

    edit_username = urwid.Edit("  Enter username: ", "Bob")
    username = Variable("Bob")
    urwid.connect_signal(
        edit_username, "postchange",
        lambda a, b: username.set(edit_username.get_edit_text()),
    )
    dynamic_text = [urwid.Text("Dynamic text"),
                    urwid.Text("  Source string : Hello {username}"),
                    edit_username,
                    T("Hello {username}",
                      {'username': username},
                      "  Translation   : {}")]

    edit_count = urwid.IntEdit("  Enter number : ", 1)
    count = Variable(1)
    urwid.connect_signal(edit_count, "postchange",
                         lambda a, b: count.set(edit_count.value()))
    pluralized_text = [urwid.Text("Pluralized text"),
                       urwid.Text("  Source string: Hi {username}, You have # "
                                  "message(s)"),
                       edit_count,
                       T("Hi {username}, {cnt, plural, "
                         "one {You have # message} "
                         "other {You have # messages}}",
                         {'username': username, 'cnt': count},
                         "  Translation  : {}")]

    edit_count2 = urwid.IntEdit("  Enter number : ", 1)
    count2 = Variable(1)
    urwid.connect_signal(edit_count2, "postchange",
                         lambda a, b: count2.set(edit_count2.value()))
    other = [urwid.Text("Another pluralized text"),
             urwid.Text("  Source string: You have # message(s)"),
             edit_count2,
             T("{cnt, plural, one {You have # message} other "
               "{You have # messages}}",
               {'cnt': count2},
               "  Translation  : {}")]

    pile = urwid.Pile(static_text +
                      [urwid.Divider()] +
                      dynamic_text +
                      [urwid.Divider()] +
                      pluralized_text +
                      [urwid.Divider()] +
                      other +
                      [urwid.Divider()] +
                      language_picker())
    filler = urwid.Filler(pile, valign="top")
    main_loop = urwid.MainLoop(filler, unhandled_input=exit_on_q)
    main_loop.run()


if __name__ == "__main__":
    main()
