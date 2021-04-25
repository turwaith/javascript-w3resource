setProblem(`Write a JavaScript program to reverse a given string`);

var words = ["hello", "elle", "computer", "nicolas"];
var output = "";

words.forEach(item => {
    output += `${item} => ${Array.from(item).reverse().join("")}\n`;
});

setSolution(output);