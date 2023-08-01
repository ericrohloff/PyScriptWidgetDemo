from js import document
from pyodide.ffi import create_proxy


class toggling:
    def __init__(self, overlayID, windowID):
        self.overlay = document.getElementById(overlayID)
        self.window = document.getElementById(windowID)
        self.overlay.addEventListener('click', create_proxy(self.toggleCheck))

    def toggleOverlay(self):
        if self.overlay.style.display == 'none':
            self.overlay.style.display = 'block'
        else:
            self.overlay.style.display = 'none'

    def toggleCheck(self, event):
        if not self.window.contains(event.target):
            self.toggleOverlay()
