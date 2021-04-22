setProblem(`Write a JavaScript program to check whether three given numbers are increasing in strict mode or in soft mode`);

var numbers = [
    [2,3,5],
    [88,0,88],
    [5,6,2],
    [10,6,4],
];
var output = "";

numbers.forEach(item => {
    output += `[${item}] => `
    if(item[0] < item[1] && item[1] < item[2])
        output += `Strict Mode\n`;
    else if(item[0] < item[1] || item[1] < item[2])
        output += `Soft Mode\n`;
    else
        output += `Neither Strict or Soft Mode\n`;
        
});

setSolution(output);