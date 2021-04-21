setProblem(`Write a JavaScript program to check three given numbers,
if the three numbers are same return 30 otherwise return 20 and if two numbers are same return 40`);

var numbers = [
    [2,2,2],
    [88,0,88],
    [5,6,7],
    [0,6,6]
];
var output = "";

numbers.forEach(item => {
    output += `[${item}] => `;
    if(item[0] === item[1] && item[1] === item[2])
        output += `30`;
    else if(item[0] === item[1] || item[0] === item[2] || item[1] === item[2])
        output += `40`;
    else
        output += `20`;
    output += `\n`;
});

setSolution(output);