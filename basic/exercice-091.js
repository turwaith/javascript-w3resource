setProblem(`Write a JavaScript program to find the maximum possible sum of
some of its k consecutive numbers (numbers that follow each other in order.)
of a given array of positive integers`);

var numbers = [
    {serie: [1,2,3,14,5], k: 2},
    {serie: [2,3,5,1,6], k: 3},
    {serie: [9,3,5,1,7], k: 2}
];
var output = "";

numbers.forEach(item => {
    output += `[${item.serie}] - ${item.k} `;

    let result = 0;
    for (let i = 0; i < item.serie.length - item.k + 1; i++) {
        let total = item.serie.slice(i,i+item.k).reduce((x,y) => x + y);
        if(total > result)
            result = total;
    }

    output += `-> ${result}\n`;
});

setSolution(output);