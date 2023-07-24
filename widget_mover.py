from js import document, window
from pyodide.ffi import create_proxy
from pyodide.ffi.wrappers import add_event_listener, remove_event_listener
import re


def extract_integers(text):
    integers = re.findall(r'\d+', text)
    number = int(''.join(integers))
    return number


class WidgetMover:
    def __init__(self, widget_id, move_id):
        self.header = document.getElementById('header')
        self.widget = document.getElementById(widget_id)
        self.mover = document.getElementById(move_id)
        self.start_x = 0
        self.start_y = 0
        self.header_height = self.get_header_height()
        self.header_dist = self.header.offsetTop
        self.window_height = self.get_window_height()
        self.window_width = self.get_window_width()

        # Add event listeners
        add_event_listener(self.mover, "mousedown", self.move_box_mouse_down)
        add_event_listener(window, "resize", self.handle_window_resize)

    def get_header_height(self):
        style = window.getComputedStyle(self.header)
        value = style.getPropertyValue('height')
        return extract_integers(value)

    def get_window_height(self):
        return window.innerHeight

    def get_window_width(self):
        return window.innerWidth

    def move_box_mouse_down(self, event):
        self.start_x = event.clientX - self.widget.offsetLeft
        self.start_y = event.clientY - self.widget.offsetTop
        add_event_listener(document, "mousemove", self.move_box_mouse_move)
        add_event_listener(document, "mouseup", self.move_box_mouse_up)
        self.mover.style.setProperty("cursor", "move")
        self.mover.style.setProperty("user-select", "none")

    def move_box_mouse_move(self, event):
        new_left = event.clientX - self.start_x
        new_top = event.clientY - self.start_y

        if new_left < 0:
            new_left = 0
        elif new_left > self.window_width - self.widget.offsetWidth:
            new_left = self.window_width - self.widget.offsetWidth

        if new_top < self.header_dist:
            new_top = self.header_dist
        elif new_top > self.window_height - self.widget.offsetHeight:
            new_top = self.window_height - self.widget.offsetHeight

        if new_top < self.header_dist + 50:
            new_top = self.header_dist + 50

        self.widget.style.left = f"{new_left}px"
        self.widget.style.top = f"{new_top}px"

    def move_box_mouse_up(self, event):
        remove_event_listener(document, "mousemove", self.move_box_mouse_move)
        remove_event_listener(document, "mouseup", self.move_box_mouse_up)
        self.mover.style.removeProperty("cursor")
        self.mover.style.removeProperty("user-select")

    def handle_window_resize(self, event):
        self.window_height = self.get_window_height()
        self.window_width = self.get_window_width()
