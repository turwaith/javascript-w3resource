setProblem(`Write a JavaScript program to find the larger number from the two given positive integers,
the two numbers are in the range 40..60 inclusive`);

var numbers = [
    [44,56],
    [99,49],
    [50,89],
    [55,59],
    [11,89],
    [40,60]
];
var output = "";

numbers.forEach(item => {
    output += `[${item}] => `;
    if(item.every(x => 40 <= x && x <= 60))
        output += Math.max(...item) + `\n`;
    else   
        output += `Numbers don't fit in range\n`;
});

setSolution(output);