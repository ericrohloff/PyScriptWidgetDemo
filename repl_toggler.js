let appears = false;
let toggle = true;



function repl_toggle() {
  replcontainer = document.getElementById("replWidgetContainer" + i);
  repl = document.getElementById("replSubWidget" + i);
  repl2 = document.getElementById("replSub2Widget" + i);

  appears = !appears;
  if (appears) {
    replcontainer.style.height = "450px";
    if (toggle) {
      repl.style.display = "block";
    } else {
      repl2.style.display = "block";
    }
  } else {
    replcontainer.style.height = "50px";
    repl.style.display = "none";
    repl2.style.display = "none";
  }
}

function mode_toggle(value) {
  replContainer

  toggle = !toggle;
  if (appears) {
    if (toggle) {
      repl.style.display = "block";
      repl2.style.display = "none";
    } else {
      repl.style.display = "none";
    }
  }
}
