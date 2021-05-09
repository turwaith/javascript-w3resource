setProblem(`Write a JavaScript program to swap the first and last elements of
a given array of integers. The array length should be at least 1`);

var numbers = [
    [1,2,3,4,0],
    [8,3,4,9],
    [],
    [0],
    [5,6,7,8,1]
];
var output = "";

numbers.forEach(item => {
    let result = ``;

    if(item.length === 1)
        result += item;
    else if(item.length > 1)
        result += Array.of(...item.slice(-1),...item.slice(1,-1),item[0]);
    else 
        result += `The array length should be a least 1`;

    output += `[${item}] => [${result}]\n`;
});

setSolution(output);