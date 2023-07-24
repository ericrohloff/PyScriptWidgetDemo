import js
from js import console, document
from widget_mover import WidgetMover
from repl_toggle import replModeToggle
from pyodide.ffi.wrappers import add_event_listener


a = 0
i = 0
j = 0


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
