setProblem(`Write a JavaScript to replace each character of a given string by
the next one in the English alphabet`);

var words = [
    "Turwaith",
    "Hello world",
    "abcdef",
    "aeiou",
    "xyz"
];
var output = "";

words.forEach(item => {
    let result = "";
    for (let i = 0; i < item.length; i++) {
        if(item.charCodeAt(i) === 122) // z
            result += `${String.fromCharCode(97)}`;
        else
            result += `${String.fromCharCode(item.charCodeAt(i)+1)}`;
    }
    output += `${item} => ${result}\n`;
});

setSolution(output);