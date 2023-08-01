import js
from js import console, document
from widget_mover import WidgetMover
from repl_toggle import replModeToggle

a = 0
i = 0
j = 0
e = 0
f = 0


def create_slider():
    var = slider_check()
    js.summon_slider(var)
    WidgetMover("sliderWidget" + str(var), "sliderMove" + str(var))


def create_button():
    var = button_check()
    console.log("button created")
    js.summon_button(var)
    WidgetMover("buttonWidget" + str(var), "buttonMove" + str(var))


def create_text():
    var = text_check()
    js.summon_text(var)
    WidgetMover("textWidget" + str(var), "textMove" + str(var))


def create_repl():
    var = repl_check()
    js.summon_repl(var)
    h = document.getElementById("replToggler" + str(var))
    k = document.getElementById("replMode" + str(var))
    replModeToggle(var)
    WidgetMover("replWidgetContainer" + str(var), "replMove" + str(var))


def create_checkbox():
    var = checkbox_check()
    js.summon_checkbox(var)
    WidgetMover("checkboxWidget" + str(var), "checkboxMove" + str(var))


def button_check():
    global i
    i = i+1
    return i


def text_check():
    global j
    j = j+1
    return j


def repl_check():
    global a
    a = a+1
    return a


def slider_check():
    global e
    e = e+1
    return e


def checkbox_check():
    global f
    f = f+1
    return f
