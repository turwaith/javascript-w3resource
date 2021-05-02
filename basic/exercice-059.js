setProblem(`Write a JavaScript program to extract the first half of a string of even length`);

var words = ["apples","banana", "computer", "sciences", "code"];
var output = "";

words.forEach(item => {
    output += `${item} => ${item.slice(0,item.length/2)}\n`;
});

setSolution(output);