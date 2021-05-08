setProblem(`Write a JavaScript program to find the larger value between the
first or last and set all the other elements with that value. Display the new
array`);

var numbers = [
    [55,9,0,3],
    [33,34,0,19],
    [52,1,88,44],
    [31,4,50,62]
];
var output = "";

numbers.forEach(item => {
    let max =  Math.max(...item);
    let result = item.map(x => x = max);

    output += `[${item}] => [${result}]\n`;
});

setSolution(output);