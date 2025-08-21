document.onload = checkDarkMode();

//color change functions
function changeBorderColor(tag, color) {
  if (document.getElementsByTagName(tag) != null) {
    var table = document.getElementsByTagName(tag);
    for (var i = 0; i < table.length; i++) {
      var td = table[i];
      td.style.borderColor = color;
      td.style.color = color;
    }
  }
}
function changeElemColor(tag, color, bgColor) {
  if (document.getElementsByTagName(tag) != null) {
    var table = document.getElementsByTagName(tag);
    for (var i = 0; i < table.length; i++) {
      var el = table[i];
      el.style.color = color;
      if (bgColor !== null) {el.style.backgroundColor = bgColor}
    }
  }
}

//sets dark & light css
function setDarkCSS() {
  document.body.style.color = "#fefefe";
  document.body.style.background = "#0a0a0a";
  changeBorderColor("th", "#fefefe");
  changeBorderColor("tr", "#fefefe");
  changeBorderColor("td", "#fefefe");
  changeElemColor("a", "lightblue");
  changeElemColor("dialog", "#fefefe", "#0a0a0a");
}
function setLightCSS() {
  document.body.style.color = "#0a0a0a";
  document.body.style.background = "#fefefe";
  changeBorderColor("th", "#0a0a0a");
  changeBorderColor("tr", "#0a0a0a");
  changeBorderColor("td", "#0a0a0a");
  changeElemColor("a", "blue");
  changeElemColor("dialog", "#0a0a0a", "#fefefe");
}

//modified code from https://support.glitch.com/t/dark-theme-button/22800/5
function checkDarkMode() {
  //creates dark mode variable if needed
  if (localStorage.getItem("darkModeEnabled") === null) {
    localStorage.setItem("darkModeEnabled", "true");
  }
  if (localStorage.getItem("darkModeEnabled") == "true") {
    document.getElementById("theme").innerHTML = "Light Theme";
    setDarkCSS();
  } else {
    document.getElementById("theme").innerHTML = "Dark Theme";
    setLightCSS();
  }
}

function changeTheme() {
  if (localStorage.getItem("darkModeEnabled") == "true") {
    setLightCSS();
    document.getElementById("theme").innerHTML = "Dark Theme";
    localStorage.setItem("darkModeEnabled", "false");
  } else {
    setDarkCSS();
    document.getElementById("theme").innerHTML = "Light Theme";
    localStorage.setItem("darkModeEnabled", "true");
  }
}

var dialog = document.getElementById("001Dv");
function openDialog(id) {
  dialog = document.getElementById(id);
  dialog.showModal();
  dialog.addEventListener("click", onClick);
}

dialog.addEventListener("click", onClick);
function onClick(event) {
  if (event.target === dialog) {
    dialog.close();
  }
}