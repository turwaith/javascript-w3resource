setProblem(`Write a JavaScript program to check whether it is possible to rearrange
characters of a given string in such way that it will become equal to another given string`);

var words = [
    {strOne: "xyz", strTwo: "zyx"},
    {strOne: "xyz", strTwo: "zyp"},
    {strOne: "nhji", strTwo: "ijhn"}
];
var output = "";

words.forEach(item => {
    output += `(${item.strOne}) - (${item.strTwo}) -> `;
    output += item.strOne.split('').every(x => item.strTwo.includes(x));
    output += `\n`;
});

setSolution(output);