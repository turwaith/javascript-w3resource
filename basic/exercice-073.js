setProblem(`Write a JavaScript program to reverse the elements of a given
array of integers length 3`);

var numbers = [
    [1,3,4],
    [6,7,2],
    [8,0,5]
];
var output = "";

numbers.forEach(item => {
    output += `[${item}] => [${item.reverse()}]\n`;
});

setSolution(output);