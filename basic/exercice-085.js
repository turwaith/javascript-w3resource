setProblem(`Write a JavaScript code to divide a given array of positive
integers into two parts. First element goes to first part, second element
goes to second part, and third element goes to first part and so on. Now
compute the sum of two parts and store into an array of size two`);

var numbers = [
    [1,1,2,2,3,3],
    [1,1,2,2,3,3,1,2],
    [1,1,2,2,3,3,1],
    [1,1,2,2,3,3,0,1],
    [1,3,6,2,5,10]
];
var output = "";

numbers.forEach(item => {
    let firstArray = [],
        secondArray = [];

    for (let i = 0; i < item.length; i++) {
        if(i%2 === 0)
            firstArray.push(item[i]);
        else    
            secondArray.push(item[i]);
    }

    output += `[${item}] => [${firstArray}] | [${secondArray}] => [${Array.of(firstArray.reduce((x,y) => x + y),secondArray.reduce((x,y) => x + y))}]\n`;
});

setSolution(output);