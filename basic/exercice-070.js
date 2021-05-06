setProblem(`Write a JavaScript program to rotate the elements left of a
given array of integers of length 3`);

var numbers = [
    [1,2,3],
    [9,3,1],
    [11,215,31]
];
var output = "";

numbers.forEach(item => {
    output += `[${item}] => `;
    item.push(item.shift());
    output += `[${item}]\n`;
});

setSolution(output);