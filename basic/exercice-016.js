setProblem(`Write a JavaScript program to compute the sum of the two given integers.
If the two values are same, then returns triple their sum`);

var numbers = [
    {nbOne: 23, nbTwo : 34},
    {nbOne: 55, nbTwo : 55},
    {nbOne: 10, nbTwo : 4},
    {nbOne: 3, nbTwo : 3},
    {nbOne: 28, nbTwo : 28},
];

var output = "";

numbers.forEach(item => {
    let result = item.nbOne === item.nbTwo ? item.nbOne * 6 : item.nbOne + item.nbTwo;
    output += `${item.nbOne+"+"+item.nbTwo} => ${result}\n`
});

setSolution(output);