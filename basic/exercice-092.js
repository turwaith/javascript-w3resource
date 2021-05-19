setProblem(`Write a JavaScript program to find the maximal difference between
any two adjacent elements of a given array of integers`);

var numbers = [
    [1,2,3,8,9],
    [1,2,3,18,9],
    [13,2,3,8,9],
    [10,0,10,1,10,-1]
];
var output = "";

numbers.forEach(item => {
    let max = 0;
    for (let i = 0; i < item.length - 1; i++) {
        let diff = Math.abs(item[i] - item[i+1]);
        if(diff > max)
            max = diff;
    }
    output += `[${item}] -> ${max}\n`;
});

setSolution(output);