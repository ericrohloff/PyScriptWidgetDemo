// Functions for the page use by mutiple elements
// Open Editor Function for opening the Ace Editor and the Run Button to get code from user
function openEditor() {
  var savedCode = localStorage.getItem("userCode");
  document.getElementById("editorOverlay").style.display = "block";
  document.getElementById("editor").style.display = "block";
  document.getElementById("runButton").style.display = "flex";
  document.getElementById("closeButton").style.display = "flex";
  var editor = ace.edit("aceEditor");
  editor.setValue(savedCode);
  editor.setTheme("ace/theme/monokai");
  editor.session.setMode("ace/mode/python");
}

// Close Editor Function for closing the Overlay, Editor and Run Button
function closeEditor() {
  var code = ace.edit("aceEditor").getValue();
  localStorage.setItem("userCode", code); // Store the user's code in Local Storage
  document.getElementById("editorOverlay").style.display = "none";
  document.getElementById("editor").style.display = "none";
  document.getElementById("runButton").style.display = "none";
  return code;
}

// Removes Widget from the page
function closeWidget(){
  if (document.getElementById(this.id).parentNode.parentNode.id.includes("replWidget")){
    document.getElementById(this.id).parentNode.parentNode.remove();
  }
  else {
    document.getElementById(this.id).parentNode.remove();
  }}

function findGreatestParentDiv(element) {
    let parent = element.parentElement;
  
    while (parent !== null) {
      if (parent.tagName === "DIV") {
        return parent;
      }
      parent = parent.parentElement;
    }
  
    return null; 
}
  

  
  
