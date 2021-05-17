setProblem(`Write a JavaScript program to find the kth greatest element of a given array of integers`);

var numbers = [
    {serie: [1,2,6,4,5], k:3},
    {serie: [-10,-25,-47,-36,0], k:1}
];
var output = "";

numbers.forEach(item => {
    output += `[${item.serie}] - k: ${item.k} -> `;
    console.log(item.serie.sort((a,b) => a - b));
    output += item.serie.sort((a,b) => b - a)[item.k-1];
    output += `\n`;
});

setSolution(output);