setProblem(`Write a JavaScript program to check whether 1 appears in first or
last position of a given array of integers. The array length must be greater
or equal to 1.`);

var numbers = [
    [1,0,45,88],
    [3,0,45,1],
    [51,2,5,88],
    [1,54,7,1]
];
var output = "";

numbers.forEach(item => {
    output += `[${item}] => ${item[0] === 1 || item[item.length-1] === 1}\n`;
});

setSolution(output);