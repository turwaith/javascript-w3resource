setProblem(`Write a JavaScript program to create a new array taking the first
and last elements from a given array of integers and length must be greater
or equal to 1`)

var numbers = [
    [2,4,5,0,3],
    [0],
    [9,9],
    []
];
var output = "";

numbers.forEach(item => {
    let result = "";

    if(item.length === 1)
        result += `${item}`;
    else if(item.length > 1)
        result += `${Array.of(item[0],item[item.length-1])}`;
    else 
        result += `The lenght must be greater or equal to 1`;
    
    output += `[${item}] => [${result}]\n`;
});

setSolution(output);