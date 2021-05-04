setProblem(`Write a JavaScript program to concatenate two strings and return the result.
If the length of the strings are not same then remove the characters from the longer string`);

var strings = [
    ["Hello", "World"],
    ["Javascript", "coding"],
    ["Buy", "a coffee"]
];
var output = "";

strings.forEach(item => {
    let min = Math.min(...[item[0].length,item[1].length]);
    console.log(min);
    output += `(${item[0]},${item[1]}) => `;
    output += `${item[0].substring(0,min)+item[1].substring(0,min)}\n`;
});

setSolution(output);