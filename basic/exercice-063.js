setProblem(`Write a JavaScript program to create a string using the middle
three characters of a given string of odd length. The string length must be 
greater or equal to three`);

var words = ["hello", "txt", "program", "exercices", "hi"];
var output = "";

words.forEach(item => {
    output += `${item} => `;
    if(item.length >= 3){
        let middle = Math.floor(item.length / 2) - 1;
        output += `${item.slice(middle, middle + 3)}\n`;
    }
    else
        output += `The string must have a length greater or equal to 3\n`;
});

setSolution(output);