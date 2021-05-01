setProblem(`Write a JavaScript program to create a new string of 4 copies of
the last 3 characters of a given original string. The length of the given
string must be 3 and above`);

var words = ["hello", "world", "nico", "txt", "Hi"];
var output = "";

words.forEach(item => {
    if(item.length >= 3)
        output += `${item} => ${item.slice(-3).repeat(4)}\n`;
    else
        output += `${item} => The string must be at least long of 3\n`;
});

setSolution(output);