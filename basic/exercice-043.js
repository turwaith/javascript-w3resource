setProblem(`Write a JavaScript program to check from three given numbers (non negative integers)
that two or all of them have the same rightmost digit`);

var numbers = [
    [2,3,5],
    [88,0,88],
    [55,65,25],
    [10,60,4],
    [0,91,101]
];
var output = "";

numbers.forEach(item => {
    output += `[${item}] => `;
    let [a,b,c] = item.map(x => x % 10 );
    if(a === b || a === c || b === c)
        output += `True`;
    else 
        output += `False`;
    output += `\n`;
});

setSolution(output);