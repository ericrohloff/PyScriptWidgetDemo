from js import document, console
from pyodide.ffi.wrappers import add_event_listener
import os

os.environ["FORCE_COLOR"] = "True"


class replModeToggle:
    def __init__(self, value):
        self.appears = False
        self.toggle = True
        self.repl = document.getElementById("replSubWidget" + str(value))
        self.repl2 = document.getElementById("replSub2Widget" + str(value))
        self.replcontainer = document.getElementById(
            "replWidgetContainer" + str(value))

        add_event_listener(document.getElementById(
            "replToggler" + str(value)), "click", self.repl_toggle)
        add_event_listener(document.getElementById(
            "replMode" + str(value)), "click", self.mode_toggle)

    def repl_toggle(self, event):
        console.log("repl toggled")
        self.appears = not self.appears
        if self.appears:
            self.replcontainer.style.height = "450px"
            if self.toggle:
                self.repl.style.display = "block"
            else:
                self.repl2.style.display = "block"
        else:
            self.replcontainer.style.height = "50px"
            self.repl.style.display = "none"
            self.repl2.style.display = "none"

    def mode_toggle(self, event):
        console.log("mode toggled")
        self.toggle = not self.toggle
        if self.appears:
            if self.toggle:
                self.repl.style.display = "block"
                self.repl2.style.display = "none"
            else:
                self.repl.style.display = "none"
                self.repl2.style.display = "block"
