setProblem("Write a JavaScript program to find the largest of three given integers");

var numbers = [
    [14,55,0],
    [152,99,100],
    [5,1,10],
];
var output = "";

numbers.forEach(item => {
    output += `[${item}] => ${Math.max(...item)}\n`;
});

setSolution(output);