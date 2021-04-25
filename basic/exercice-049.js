setProblem(`Write a JavaScript program to replace every character in a given
string with the character following it in the alphabet`);

var words = ["nicolas", "compute", "abc", "hello"];
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var output = "";

words.forEach(item => {
    output += `${item} => `;
    let result = [];
    item.split("").forEach(item => {
        let index = alphabet.indexOf(item);
        result.push(index === 25 ? alphabet[0] : alphabet[index+1]);
    });
    output += result.join("");
    output += "\n";
});

setSolution(output);