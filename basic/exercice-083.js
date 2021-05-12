setProblem(`Write a JavaScript to find the longest string from a given array of strings`);

var words = [
    "Hello",
    "World",
    "Turwaith",
    "Code",
    "CPU"
];
var output = "";
var longest = "";

for(i = 0; i < words.length; i++)
    if(longest.length < words[i].length)
        longest = words[i];

output += `[${words}] => ${longest}`;

setSolution(output);