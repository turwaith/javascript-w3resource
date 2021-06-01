setProblem(`Write a JavaScript program to divide an integer by another integer as long as the result is an integer and return the result`);

var numbers = [
    {firstNb: -12, secondNb: 2},
    {firstNb: 13, secondNb: 2},
    {firstNb: 13, secondNb: 1},
];
var output = ``;

numbers.forEach(item => {
    let nb = item.firstNb;    
    if(item.secondNb === 1)
        output += `[${nb},${item.secondNb}] -> ${nb}\n`;
    else{
        while(nb % item.secondNb === 0)
            nb = nb / item.secondNb;
        
        output += `[${item.firstNb},${item.secondNb}] -> ${nb}\n`;
    }

});

setSolution(output);