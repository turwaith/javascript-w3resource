setProblem(`Write a JavaScript program to add two digits of a given positive
integer of length two`);

var numbers = [
    34, 59, 20, 88, 27
];
var output = "";

numbers.forEach(item => {
    let digits = item.toString().split("");

    output += `${item} => ${parseInt(digits[0]) + parseInt(digits[1])}\n`;
});

setSolution(output);