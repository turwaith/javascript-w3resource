setProblem("Write a JavaScript program to find a value which is nearest to 100 from two different given integer values");

var numbers = [
    [55,99],
    [1,0],
    [49,50],
    [49,50],
    [0,33,102,69],
];
var output = "";

numbers.forEach(item => {
    output += `[${item}] => ${100 - Math.min(...item.map(x => 100 - x))}\n`;
});

setSolution(output);