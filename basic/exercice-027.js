setProblem(`Write a JavaScript program to check whether a string starts with 'Java' and false otherwis`);

var words = ["Is Java great ?", "Java is a programing language", "Hello Java"];
var output = "";

words.forEach(item => {
    let result = item.startsWith("Java");
    output += `"${item}" => ${result}\n`;
});

setSolution(output);