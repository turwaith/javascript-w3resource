setProblem(`Write a JavaScript program to create a new string of specified
copies (positive number) of a given string`);

var data = [
    {word: "Turwaith",times: 3},
    {word: "text",times: 10},
    {word: "Hello World!",times: 2}
];
var output = "";

data.forEach(item => {
    output += `${item.word} (${item.times}) => ${item.word.repeat(item.times)}\n`;
});

setSolution(output);