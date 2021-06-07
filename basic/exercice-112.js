function trailingZero(number) {
    let total = getFact(number),
        count = 0;
    
    while(Number.isInteger(total/10)) {
        total /= 10;
        count++;
    }

    return `${number} -> ${count}\n`;
}

function getFact(number) {
    if(number === 1)
        return 1
    else 
        return number * getFact(--number);
}

var output = trailingZero(8) + trailingZero(9) + trailingZero(10) + trailingZero(3);

setProblem(`Write a JavaScript program to find the number of trailing zeros
in the decimal representation of the factorial of a given number`);
setSolution(output);
