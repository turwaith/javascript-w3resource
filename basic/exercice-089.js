setProblem(`Write a JavaScript program to check whether it is possible to
replace $ in a given expression x $ y = z with one of the four signs +, -, *
or / to obtain a correct expression`);

var expressions = [
    {x: 10, y: 30, z: 300},
    {x: 10, y: 25, z: 250},
    {x: 30, y: 25, z: 5},
    {x: 100, y: 25, z: 4.0},
    {x: 100, y: 25, z: 25}
];
var output = "";

expressions.forEach(item => {
    output += `X: ${item.x} - Y: ${item.y} - Z: ${item.z} -> `;
    output += item.x + item.y === item.z ||
              item.x - item.y === item.z ||
              item.x * item.y === item.z ||
              item.x / item.y === item.z;
    output += `\n`;
});

setSolution(output);