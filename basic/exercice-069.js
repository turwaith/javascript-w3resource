setProblem(`Write a JavaScript program to compute the sum of three elements
of a given array of integers of length 3`);

var numbers = [
    [1,2,3],
    [10,20,30],
    [1,3,9],
    [11,21,31]
];
var output = "";

numbers.forEach(item => {
    output += `[${item}] => `;
    output += `${item.reduce((x,y) => x + y)}\n`;
});

setSolution(output);