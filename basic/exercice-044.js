setProblem(`Write a JavaScript program to check from three given integers
that whether a number is greater than or equal to 20 and less than one of
the others`);

var numbers = [
    [20,30,54],
    [88,0,88],
    [15,65,25],
    [10,60,4],
    [0,91,101],
    [23, 45, 10],
    [23, 23, 10],
    [21, 66, 75]
];
var output = "";

numbers.forEach(item => {
    output += `[${item}] => `;
    output += item.some(x => {
        return (x >= 20 && item.some(y => x < y))}
        ) + `\n`;
});

setSolution(output);