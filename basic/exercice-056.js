setProblem(`Write a JavaScript program to divide two positive numbers and return a string with properly formatted commas`);

var numbers = [
    [23,8],
    [23,3],
    [33,88],
    [44,5]
];
var output = "";

numbers.forEach(item => {
    let result = (item[0] / item[1]).toString();

    output += `${item[0]}/${item[1]} => ${result.replace(/[.]/g,',')}\n`;
});

setSolution(output);