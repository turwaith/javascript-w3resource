setProblem(`Write a JavaScript program to get the difference between a given number and 13,
if the number is greater than 13 return double the absolute difference`);

var numbers = [13,0,30,39,1,55,66];
var output = "";

numbers.forEach(item => {
    let result = item > 13 ? Math.abs(2*(13-item)) : 13 - item;
    output += `${"[13-" +item+"]"} => ${result}\n`;
});

setSolution(output);