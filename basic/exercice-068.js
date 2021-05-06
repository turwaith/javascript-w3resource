setProblem(`Write a JavaScript program to create a new string using the first
and last n characters from a given sting. The string length must be greater
or equal to n`);

var words = [
    {word: "javascript", size : 2},
    {word: "javascript", size : 3},
    {word: "typescript", size : 4},
    {word: "hello", size : 3}
];
var output = "";

words.forEach(item => {
    output += `${item.words} => `;

    if(item.word.length >= item.size * 2)
        output += `${item.word.slice(0,item.size)+item.word.slice(-item.size)}\n`;
    else
        output += `${item.word}\n`
});

setSolution(output);