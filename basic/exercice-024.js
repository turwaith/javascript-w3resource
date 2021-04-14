setProblem(`Write a JavaScript program to create a new string from a given string with
the first character of the given string added at the front and back`);

var words = ["turwaith", "programing", "web", "i", "exe"];
var output = "";

words.forEach(item => {
    output += `"${item}" => ${item[0] + item + item[0]}\n`;
});

setSolution(output);