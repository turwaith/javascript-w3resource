setProblem(`Write a JavaScript program to check whether the first and last
elements are equal of a given array of integers length 3`);

var numbers = [
      [3,4,3],
      [4,4,3],
      [1,2,3]
];
var output = "";

numbers.forEach(item => {
    output += `[${item}] => ${item[0] === item[item.length-1]}\n`;
});

setSolution(output);