setProblem(`Write a JavaScript program to create new string with first 3 characters are in lower case from a given string.
If the string length is less than 3 convert all the characters in upper case`);

var words = ["hello", "javascript", "hi", "program", "you"];
var output = "";

words.forEach(item => {
    output += `'${item}' => ${item.length < 3 ? item.toUpperCase() : item.slice(0,3).toUpperCase() + item.slice(3)}\n`;
});

setSolution(output);