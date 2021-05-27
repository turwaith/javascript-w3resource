setProblem(`Write a JavaScript program to find the number of inversions of a
given itemay of integers`);

var numbers = [
    [0, 3, 2, 5, 9],
    [1, 5, 4, 3],
    [10, 30, 20, -10]
];
var output = "";

numbers.forEach(item => {
    let count = 0;
    for (var i = 0; i < item.length; i++) {
        for (var j = i + 1; j < item.length; j++) {
            if (item[i] > item[j]) 
            count++;
        }
    }

    output += `[${item}] -> ${count}\n`;
});

setSolution(output);