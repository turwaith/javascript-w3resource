setProblem(`Write a JavaScript program to concatenate two strings except 
their first character`);

var strings = [
    ["Hello", "World"],
    ["Javascript", "coding"],
    ["go", "away"],
    ["et", "pext"]
];
var output = "";

strings.forEach(item => {
    output += `(${item[0]},${item[1]}) => ${item[0].substring(1)+ item[1].substring(1)}\n`;
});

setSolution(output);