setProblem(`Write a JavaScript program to find the number of
even values in sequence before the first occurrence of a given number`);

function findEvenNumbers(sequence, end){
    let count = 0;
    
    for (let i = 0; i < sequence.length; i++) {
        if(sequence[i] ===  end)
            break;
        else if(sequence[i] % 2 === 0)
            count++;       
    }

    return `[${sequence}] - ${end} -> Number of even values: ${count}\n`;
}

var output = findEvenNumbers([1,2,3,4,5,6,7,8], 5) + findEvenNumbers([1,2,3,4,8,6,7,5], 5);

setSolution(output);