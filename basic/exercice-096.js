setProblem(`Write a JavaScript program to compute the sum of absolute differences of consecutive numbers of a given array of integers`);

var numbers = [
    [1, 2, 3, 2, -5],
    [-1, -2, -3, -2, 5],
    [12, 88, -12, -88]    
];
var output = "";

numbers.forEach(item => {
    let total = 0;
    for (let i = 0; i < item.length - 1; i++) {
        total += Math.abs(item[i] - item[i+1]);
    }
    output += `[${item}] -> ${total}\n`;
});

setSolution(output);