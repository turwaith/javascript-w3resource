setProblem(`Write a JavaScript program to create a new string from a given
string, removing the first and last characters of the string if the first or
last character are 'P'. Return the original string if the condition is not
satisfied`);

var words = ["turwaith", "PwordP", "PpcodepP", "xxx"];
var output = "";

words.forEach(item => {
    let result = item.startsWith("P") && item.endsWith("P");

    output += `${item} => ${result ? item.slice(1,-1) : item}\n`;
});

setSolution(output);