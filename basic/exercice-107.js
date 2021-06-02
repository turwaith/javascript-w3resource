setProblem(`Write a JavaScript program to find the number of sorted pairs formed
by its elements of a given array of integers such that one element in the pair is
divisible by the other one`);

var numbers = [
    [1, 3, 2],
    [2, 4, 6],
    [2, 4, 16]
];
var output = ``;

numbers.forEach(item => {
    let result = [];
    for (let i = 0; i < item.length - 1; i++) {        
        for (let j = i + 1; j < item.length; j++) {            
            if(item[i] % item[j] === 0 || item[j] % item[i] === 0)
                result.push([item[i],item[j]]);
        }
    }
    output += `[${item}] -> ${result.length} pair${item.length > 1 ? 's' : ''} -`;
    result.forEach(item => output += ` [${item}] `);
    output += `\n`;
});

setSolution(output);