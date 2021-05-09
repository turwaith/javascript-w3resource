setProblem(`Write a JavaScript program to test whether an array of integers
of length 2 contains 1 or a 3`);

var numbers = [
    [1,3],
    [0,3],
    [1,0],
    [0,0]
];
var output = "";

numbers.forEach(item => {
    output += `[${item}] => ${item.includes(1) || item.includes(3)}\n`;
});

setSolution(output);