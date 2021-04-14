setProblem(`Write a JavaScript program to create a new string from a given string 
taking the last 3 characters and added at both the front and back.
The string length must be 3 or more`);

var words = ["turwaith", "programing", "web", "i", "exe"];
var output = "";

words.forEach(item => {
    let result = item.length >= 3 ?
        item.slice(-3) + item + item.slice(-3) :
        item;
    output += `"${item}" => ${result}\n`;
});

setSolution(output);