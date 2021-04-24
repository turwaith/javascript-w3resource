setProblem(`Write a JavaScript program to check two given integer values and
return true if one of the number is 15 or if their sum or difference is 15`);

var numbers = [
    [15,9],
    [25,15],
    [7,8],
    [25,10],
    [5,9],
    [7,9],
    [9,25],
    [3,3,3,3,3],
    [45,15,15],
    [5,5,5,5,5],
    [-5,-5,5,5,5,10],
];
var output = "";

numbers.forEach(item => {
    output += `[${item}] => `;
    output += `${item.some(x => x === 15) ||
               item.reduce((x,y) => x + y) === 15 ||
               item.reduce((x,y) => x - y) === 15}`;
    output += `\n`;
});

setSolution(output);