// Description: Functions for creating new elements on the page

function summon_button(value) {
    let i = value;

    buttonWidget = document.createElement("div");
    buttonWidget.id = "buttonWidget" + i;
    buttonWidget.className = "buttonWidget";
  
    button = document.createElement("button");
    button.id = "button" + i;
    button.className = "button";
  
    buttonMove = document.createElement("div");
    buttonMove.id = "buttonMove" + i;
    buttonMove.className = "box2";
  
    triangleIcon = document.createElement("div");
    triangleIcon.id = "triangleIcon" + i;
    triangleIcon.className = "triangle";
    triangleIcon.onclick = openEditor;

    closeIcon = document.createElement("div");
    closeIcon.id = "closeButtonIcon" + i;
    closeIcon.className = "close";
    closeIcon.onclick = closeWidget;

    
    document.body.appendChild(buttonWidget);
    buttonWidget.appendChild(buttonMove);
    buttonWidget.appendChild(triangleIcon);
    buttonWidget.appendChild(button);
    buttonWidget.appendChild(closeIcon);
}

function summon_text(value) {
    let i = value;

    textWidget = document.createElement("div");
    textWidget.id = "textWidget" + i;
    textWidget.className = "textWidget";

    textArea = document.createElement("div");
    textArea.id = "textArea" + i;
    textArea.className = "textArea";
    textArea.readOnly = "True";
    textArea.innerHTML = "Input text here";

    textMove = document.createElement("div");
    textMove.id = "textMove" + i;
    textMove.className = "box2";

    triangleIcon = document.createElement("div");
    triangleIcon.id = "triangleIcon" + i;
    triangleIcon.className = "triangle";
    triangleIcon.onclick = openEditor;

    closeIcon = document.createElement("div");
    closeIcon.id = "closeTextIcon" + i;
    closeIcon.className = "close";
    closeIcon.onclick = closeWidget;

    document.body.appendChild(textWidget);
    textWidget.appendChild(textMove);
    textWidget.appendChild(triangleIcon);
    textWidget.appendChild(textArea);
    textWidget.appendChild(closeIcon);
}

function summon_repl(value){
    let i = value;

    replWidgetContainer = document.createElement("div");
    replWidgetContainer.id = "replWidgetContainer" + i;
    replWidgetContainer.className = "replWidgetContainer";

    replWidget = document.createElement("div");
    replWidget.id = "replWidget" + i;
    replWidget.className = "replWidget";

    replToggler = document.createElement("div");
    replToggler.id = "replToggler" + i;
    replToggler.className = "replToggler";
    replToggler.innerHTML = "REPL";

    closeIcon = document.createElement("div");
    closeIcon.id = "closeIcon" + i;
    closeIcon.className = "close";
    closeIcon.onclick = closeWidget;

    replMode = document.createElement("div");
    replMode.id = "replMode" + i;
    replMode.className = "replMode";
    replMode.innerHTML = "MODE";

    replMove = document.createElement("div");
    replMove.id = "replMove" + i;
    replMove.className = "replWidgetMove";

    triangleIcon = document.createElement("div");
    triangleIcon.id = "triangleIcon" + i;
    triangleIcon.className = "replWidgetRepl";
    triangleIcon.onclick = openEditor;

    replSubWidget = document.createElement("div");
    replSubWidget.id = "replSubWidget" + i;
    replSubWidget.className = "replSubWidget";

    replSub2Widget = document.createElement("div");
    replSub2Widget.id = "replSub2Widget" + i;
    replSub2Widget.className = "replSub2Widget";

    console = document.createElement("div");
    console.id = "console" + i;
    console.className = "SPrepl";
    console.tabindex = "0";

    terminal = document.createElement("py-terminal");

    document.body.appendChild(replWidgetContainer);
    replWidgetContainer.appendChild(replWidget);
    replWidget.appendChild(replMove);
    replWidget.appendChild(closeIcon);
    replWidget.appendChild(triangleIcon);
    replWidget.appendChild(replToggler);
    replWidget.appendChild(replMode);
    replWidgetContainer.appendChild(replSubWidget);
    replWidgetContainer.appendChild(replSub2Widget);
    replSubWidget.appendChild(console);
    replSub2Widget.appendChild(terminal);
}

function summon_slider(value){
    let i = value;

    sliderWidget = document.createElement("div");
    sliderWidget.id = "sliderWidget" + i;
    sliderWidget.className = "sliderWidget";

    slider = document.createElement("input");
    slider.id = "slider" + i;
    slider.className = "slider";
    slider.type = "range";
    slider.min = "0";
    slider.max = "100";
    slider.value = "50";

    sliderMove = document.createElement("div");
    sliderMove.id = "sliderMove" + i;
    sliderMove.className = "box2";
    
    triangleIcon = document.createElement("div");
    triangleIcon.id = "triangleIcon" + i;
    triangleIcon.className = "triangle";
    triangleIcon.onclick = openEditor;

    closeIcon = document.createElement("div");
    closeIcon.id = "closeSliderIcon" + i;
    closeIcon.className = "close";
    closeIcon.onclick = closeWidget;

    document.body.appendChild(sliderWidget);
    sliderWidget.appendChild(sliderMove);
    sliderWidget.appendChild(triangleIcon);
    sliderWidget.appendChild(slider);
    sliderWidget.appendChild(closeIcon);
}

function summon_checkbox(value){
    let i = value;

    checkboxWidget = document.createElement("div");
    checkboxWidget.id = "checkboxWidget" + i;
    checkboxWidget.className = "checkboxWidget";

    checkbox = document.createElement("input");
    checkbox.id = "1checkbox" + i;
    checkbox.className = "checkbox";
    checkbox.type = "checkbox";

    check1box = document.createElement("input");
    check1box.id = "check1box" + i;
    check1box.className = "check1box"; 
    check1box.type = "checkbox";

    check2box = document.createElement("input");
    check2box.id = "check2box" + i;
    check2box.className = "check2box";
    check2box.type = "checkbox";

    checkboxMove = document.createElement("div");
    checkboxMove.id = "checkboxMove" + i;
    checkboxMove.className = "box2";
    
    triangleIcon = document.createElement("div");
    triangleIcon.id = "triangleIcon" + i;
    triangleIcon.className = "triangle";
    triangleIcon.onclick = openEditor;

    closeIcon = document.createElement("div");
    closeIcon.id = "closeCheckboxIcon" + i;
    closeIcon.className = "close";
    closeIcon.onclick = closeWidget;

    document.body.appendChild(checkboxWidget);
    checkboxWidget.appendChild(checkboxMove);
    checkboxWidget.appendChild(triangleIcon);
    checkboxWidget.appendChild(checkbox);
    checkboxWidget.appendChild(check1box);
    checkboxWidget.appendChild(check2box);
    checkboxWidget.appendChild(closeIcon);
}

