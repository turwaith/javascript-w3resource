setProblem(`Write a JavaScript program to convert the letters of a given
string in alphabetical orde`);

var words = [
    "Python", "Javascript", "Program", "Web", "Turwaith", "zirameov"
];
var output = "";

words.forEach(item => {
    let result = item.toLowerCase().split("").sort().join("");
    output += `${item} => ${result}\n`;
});

setSolution(output);