setProblem(`Write a JavaScript program to create a new array taking the middle elements of the two arrays of integer and each length 3`);

var numbers = [
    [[3,2,4],[5,5,5]],
    [[0,4,3],[8,1,9]],
    [[6,8,0],[2,1,9]]
];
var output = "";

numbers.forEach(item => {
    output += `[${item[0]}] [${item[1]}] => `;
    output += `[${item[0][1]},${item[1][1]}]\n`;
});

setSolution(output);