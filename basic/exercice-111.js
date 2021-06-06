function checkNumber(sequence){        
    if(sequence[0] === sequence[1])
        return `[${sequence}] -> ${sequence[2]}\n`;
    if(sequence[0] === sequence[2])
        return `[${sequence}] -> ${sequence[1]}\n`;
    if(sequence[1] === sequence[2])
        return `[${sequence}] -> ${sequence[0]}\n`;
    return `[${sequence}] -> Three numbers are unequal\n`;
}

var output = ``;
var numbers = [[1,2,2], [1,1,2], [1,2,3]];

numbers.forEach(x => output += checkNumber(x));

setProblem(`Write a JavaScript program to check a number from three given numbers where two numbers are equal, find the third one`);
setSolution(output); 