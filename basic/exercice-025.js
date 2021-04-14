setProblem(`Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7`);

var numbers = [3,22,102,435,77,9,34];
var output = "";

numbers.forEach(item => {
    let result = item % 3 === 0 || item % 7 === 0;
    output += `${item} is a multiple of 3 of 7 => ${result}\n`;
});

setSolution(output);