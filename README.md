# PyScriptWidgetDemo
Webpage to demo widgets that work and talk to each other. The goal of this project is to make a canvas for GUIs and functionality between the widgets. 
# How it works
Right now the way the code it set up so you can open a Python code editor from any widget. By using the js library PyScript we can manipulate the way the webpage looks and functions. As of now some of the fucntionality of the widgets such as opening the code editor is written in JavaScript, but most is written in Python when made possible. 
# Getting Started
To start we want to understand how each Widget is called through the code editor. As of right now we can call the Widget by its naming scheme. The naming scheme of the Widgets right now is as follows: (for everything except the adaWidget) each widget you create will increase its id sequencially, so replWidget1, replWidget2, and so on. This way by using the js library and importing document we can change values of the Widgets and how they look through Python. Try changing the color of a Widget!!

