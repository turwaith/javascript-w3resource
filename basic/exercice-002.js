setProblem("Write a JavaScript program to print the contents of the current window");

var button = document.createElement("button");
var text = document.createTextNode("Print the window");
button.appendChild(text);
button.addEventListener("click", () => window.print());

setSolution(button, true);