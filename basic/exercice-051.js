setProblem(`Write a JavaScript program to convert a given number to hours and
minutes`);

var numbers = [
    124,33494,88339134,459595
];
var output = "";

numbers.forEach(item => {
    output += `${item} => `;
    output += `${Math.floor(item/60)} Hours -- `;
    output += `${item%60} minutes \n`;
});

setSolution(output);