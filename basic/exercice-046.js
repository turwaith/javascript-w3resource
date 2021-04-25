setProblem(`Write a JavaScript program to check two given non-negative
integers that whether one of the number (not both) is multiple of 7 or 11`);

var numbers = [
    [7,0],
    [30,23],
    [40,35]
];
var output = "";

numbers.forEach(item => {
    output += `[${item}] => `;
    output += item.some(x => (x%7 === 0 || x%11 === 0));
    output += `\n`;
});

setSolution(output);