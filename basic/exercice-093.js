setProblem(`Write a JavaScript program to find the maximal difference among
all possible pairs of a given array of integers`);

var numbers = [
    [1,2,3,8,9],
    [1,2,3,18,9],
    [13,2,3,8,9],
    [10,0,4,5,10]
];
var output = "";

numbers.forEach(item => {
    let max = 0;
    for (let i = 0; i < item.length; i++) {
        for (let j = i; j < item.length - 1; j++) {
            let diff = Math.abs(item[i] - item[j+1]);
            if(diff > max)
                max = diff;
        }        
    }
    output += `[${item}] -> ${max}\n`;
});

setSolution(output);