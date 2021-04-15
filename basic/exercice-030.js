setProblem(`Write a JavaScript program to check whether a string "Script" presents at 5th (index 4) position in a given string,
if "Script" presents in the string return the string without "Script" otherwise return the original one`);

var words = ["javascript", "ecmascript", "typescript", "script", "scriptHello", "typescript is great i guess"];
var output = "";

words.forEach(item => {
    let result = item.slice(4,10) === "script" ? item.substring(0,4) + item.substring(11) : item;
    output += `"${item}" => ${result}\n`;
});

setSolution(output);