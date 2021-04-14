setProblem(`Write a JavaScript program to create a new string from a given string changing the position of first and last characters.
The string length must be greater than or equal to 1`);

var words = ["turwaith", "programing", "web", "i", "exe", ""];
var output = "";

words.forEach(item => {
    let size = item.length,
        result = "";
    if(size > 1)
        result = item[size-1] + item.substring(1,size-1) + item[0];
    else
        result = "Insufficient word length !";
    output += `"${item}" => ${result}\n`;
});

setSolution(output);