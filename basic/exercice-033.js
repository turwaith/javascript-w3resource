setProblem("Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive");

var numbers = [
    [44,56],
    [99,49],
    [50,89],
    [71,99],
    [101,89],
    [79,50]
];
var output = "";

numbers.forEach(item => {
    let result = item.every(x => (40 <= x && x <= 60)) || item.every(x => (70 <= x && x <= 100));
    output += `[${item}] => ${result}\n`;
});

setSolution(output);