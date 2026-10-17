// ---------- 1. DARK MODE BUTTON ----------
var themeBtn = document.getElementById("themeBtn");

themeBtn.onclick = function () {
  // Add the "dark" class if it is missing, remove it if it is there
  document.body.classList.toggle("dark");

  // Change the button text to match
  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "Light mode";
  } else {
    themeBtn.textContent = "Dark mode";
  }
};


// ---------- 2. FAKE EDITOR TABS ----------
// The code for each file is stored in an object
var files = {
  "server.js":
    "const express = require('express');\n" +
    "const app = express();\n\n" +
    "app.get('/', function (req, res) {\n" +
    "  res.send('Hello from VS Code!');\n" +
    "});\n\n" +
    "app.listen(3000);",

  "css_1.css":
    "body {\n" +
    "  font-family: Arial;\n" +
    "  background: white;\n" +
    "}\n\n" +
    "h1 {\n" +
    "  color: #0078d4;\n" +
    "}",

  "html.html":
    `<!DOCTYPE html>\n<html>\n  <body>\n    <h1>Hello World</h1>\n  </body>\n</html>`
};

var codeBox = document.getElementById("code");
var tabs = document.querySelectorAll(".tab");

// This function shows one file's code and highlights its tab
function showFile(fileName) {
  codeBox.textContent = files[fileName];

  for (var i = 0; i < tabs.length; i++) {
    if (tabs[i].dataset.file === fileName) {
      tabs[i].classList.add("active");
    } else {
      tabs[i].classList.remove("active");
    }
  }
}

// When a tab is clicked, show that file
for (var i = 0; i < tabs.length; i++) {
  tabs[i].onclick = function () {
    showFile(this.dataset.file);
  };
}

// Show server.js when the page first loads
showFile("server.js");


// ---------- 3. DOWNLOAD BUTTONS ----------
var downloadButtons = document.querySelectorAll("[data-os]");
var message = document.getElementById("message");

for (var j = 0; j < downloadButtons.length; j++) {
  downloadButtons[j].onclick = function () {
    message.textContent = "Demo only: this would download VS Code for " + this.dataset.os + ".";
  };
}