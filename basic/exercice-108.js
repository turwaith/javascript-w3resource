setProblem(`Write a JavaScript program to create the dot products of two given 3D vectors`);

var numbers = [
    {firstNb: [1,2,3], secondNb: [1,2,3]},
    {firstNb: [2,4,6], secondNb: [2,4,6]},
    {firstNb: [1,1,1], secondNb: [0,1,-1]}
];
var output = ``;

numbers.forEach(item => {
    let result = [];
    for (let i = 0; i < item.firstNb.length; i++) {
        result.push(item.firstNb[i] * item.secondNb[i]);
    }
    result = result.reduce((x,y) => x + y);
    output += `[${item.firstNb}] - [${item.secondNb}] -> ${result}\n`;
});

setSolution(output);