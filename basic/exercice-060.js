setProblem(`Write a JavaScript program to create a new string without the first and last character of a given string`);

var words = ["Hello", "computer science", "Xhello world!"];
var output = "";

words.forEach(item => {
    output += `${item} => ${item.slice(1,-1)}\n`;
});

setSolution(output);