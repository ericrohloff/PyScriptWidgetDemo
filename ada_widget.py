import js
from js import console, document, prompt
from widget_mover import WidgetMover
from pyodide.ffi import create_proxy
from pyscript import Element
from toggle import toggling

key = False

ADA_KEY = ''
ADA_USERNAME = ''
GROUP_NAME = ''
FEED_NAME = ''

Adafruit_pass = {'key': ADA_KEY, 'username': ADA_USERNAME}
WidgetMover("AdaWidget", "AdaBox")
togAda = toggling('AdaOverlay', 'AdaWindow')


def button_send():
    buttonvalue = prompt("What buttonWidget number?")
    text = document.getElementById("buttonWidget" + buttonvalue)
    text.onclick(create_proxy((Ada.Save), buttonvalue))


def retrieve(attribute, text, print):
    val = Element(text).element.value
    attribute = val
    Element(text).element.value = ''
    printedVal = js.document.getElementById(print)
    printedVal.innerHTML = val


def summon_ada():
    global key
    key = not key
    if key:
        document.getElementById("AdaWidget").style.display = "block"
    else:
        document.getElementById("AdaWidget").style.display = "none"
