setProblem(`Write a JavaScript program where the program takes a random integer between 1 to 10,
the user is then prompted to input a guess number. If the user input matches with guess number,
the program will display a message "Good Work" otherwise display a message "Not matched`);

var userNumber = parseInt(prompt("Enter your number\nBetween 1 and 10 "));
var randomNumber = Math.floor(Math.random() * (11 - 1) + 1);
var output = "";

if(userNumber === randomNumber)
    output = "Good work";
else
    output = `Not matched, the number was ${randomNumber}`;

setSolution(output);
