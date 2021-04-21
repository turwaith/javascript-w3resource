setProblem(`Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8`);

var numbers = [
    [8,2],
    [2,6],
    [1,9],
    [4,8],
    [9,3],
    [10,3]
];
var output = "";

numbers.forEach(item => {
    let result = item[0] === 8 || item[1] === 8 ||
                 Math.abs(item[0] - item[1]) === 8 ||
                (item[0] + item[1]) === 8;
    output += `[${item}] => ${result}\n`;
});

setSolution(output);