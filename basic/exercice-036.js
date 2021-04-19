setProblem(`Write a JavaScript program to check whether the last digit of the three given positive integers is same`);

var numbers = [45,55,65];

output = `[${numbers}] => `
output += numbers[0].toString().slice(-1) === numbers[1].toString().slice(-1) && numbers[0].toString().slice(-1) === numbers[2].toString().slice(-1);

setSolution(output);