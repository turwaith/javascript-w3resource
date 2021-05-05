setProblem(`Write a JavaScript program to test whether a string end with
"Script". The string length must be greater or equal to 6`);

var words = ["JavaScript", "TypeScript", "Hello world",
             "Turwaith", "Javascript", "TypeScript code"];
var output = "";

words.forEach(item => {
    output += `${item} => ${item.endsWith("Script")}\n`;
});

setSolution(output);