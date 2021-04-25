setProblem(`Write a JavaScript program to check whether a given number is
presents in the range 40..10000`);

var numbers = [40,10001,5000,50,300000];
var output = ``;

numbers.forEach(item => {
    output += `[${item}] => `;
    output += 40 <= item && item <= 10000;
    output += `\n`;
});

setSolution(output);