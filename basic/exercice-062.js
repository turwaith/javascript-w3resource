setProblem(`Write a JavaScript program to move last three character to the
start of a given string. The string length must be greater or equal to three`);

var words = ["python", "javascript", "coding", "turwaith"];
var output = "";

words.forEach(item => {
    output += `${item} => ${item.slice(-3)+item.slice(0,-3)}\n`;
});

setSolution(output);
