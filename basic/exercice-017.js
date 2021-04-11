setProblem(`Write a JavaScript program to compute the absolute difference between a specified number and 19.
Returns triple their absolute difference if the specified number is greater than 19`);

var numbers = [44,10,3,99,56,20];
var output = "";

numbers.forEach(item => {
    let result = item > 19 ? Math.abs(3*(19-item)) : 19 - item;
    output += `[19-${item}] => ${result}\n`;
});

setSolution(output);