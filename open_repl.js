// Open Editor Function for opening the Ace Editor and the Run Button to get code from user
function openEditor() {
  document.getElementById("editorOverlay").style.display = "block";
  document.getElementById("editor").style.display = "block";
  document.getElementById("runButton").style.display = "flex";
  document.getElementById("closeButton").style.display = "flex";
  var editor = ace.edit("aceEditor");
  editor.setValue("# Try coding by changing the color of a widget!")
  editor.setTheme("ace/theme/monokai");
  editor.session.setMode("ace/mode/python");
}

// Close Editor Function for closing the Overlay, Editor and Run Button
function closeEditor() {
  var code = ace.edit("aceEditor").getValue();
  document.getElementById("editorOverlay").style.display = "none";
  document.getElementById("editor").style.display = "none";
  document.getElementById("runButton").style.display = "none";
  return code;
}


