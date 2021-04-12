setProblem(` Write a JavaScript program to check whether a given integer is within 20 of 100 or 400`);

var numbers = [10, 90, 99, 199, 200];
var output = "";

numbers.forEach(item => {
    output += `${item} => ${(Math.abs(100 - item) <= 20) || (Math.abs(400 - item) <= 20)}\n`;
});

setSolution(output);