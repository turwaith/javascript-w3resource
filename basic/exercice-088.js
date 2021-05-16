setProblem(`Write a JavaScript program to check whether two given integers are
similar or not, if a given divisor divides both integers and it does not
divide either`);

var numbers = [
    {numberOne: 10, numberTwo: 25, divisor: 5},
    {numberOne: 10, numberTwo: 20, divisor: 5},
    {numberOne: 10, numberTwo: 20, divisor: 4}
];
var output = "";

numbers.forEach(item => {
    output += `First number: ${item.numberOne} -- Second number: ${item.numberTwo} -- Divisor: ${item.divisor} -> `;
    output += ((item.numberOne % item.divisor === 0 && item.numberTwo % item.divisor === 0) ||
       (item.numberOne % item.divisor != 0 && item.numberTwo % item.divisor != 0));
    output += `\n`;
});

setSolution(output);