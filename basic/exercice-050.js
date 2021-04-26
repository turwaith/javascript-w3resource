setProblem(`Write a JavaScript program to capitalize the first letter of each
word of a given string`);

var userString = "the best way to learn a new programming language is to build projects.";
var output = "";

output += `${userString}\n=>\n${userString.split(" ").map(x => x[0].toUpperCase()+x.substring(1)).join(" ")}`;

setSolution(output);