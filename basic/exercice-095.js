setProblem(`Write a JavaScript program to replace all the numbers with a specified number of a given array of integers`);

var numbers = [
    {serie: [1, 2, 3, 2, 2, 8, 1, 9], nbToReplace: 2, newNb: 5},
    {serie: [1, 2, 1, 2, 1, 3, 1, 9], nbToReplace: 1, newNb: 8},
    {serie: [0, 0, 0, 0, 0, 0, 0, 0], nbToReplace: 0, newNb: 9}
];
var output = "";

numbers.forEach(item => {
    let newSerie = item.serie.map(x => x === item.nbToReplace ? x = item.newNb : x);

    output += `[${item.serie}] - (${item.nbToReplace}|${item.newNb}) -> [${newSerie}]\n`;
});

setSolution(output);