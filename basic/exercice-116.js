function getAllOptions(sequence) {
    let result = [];

    for (let index = 0, total = 0; index < 10; index++) {
        total = parseInt(sequence.replace('#',index.toString()));
        if(total % 3 === 0)
            result.push(total);
    }
    
    return `"${sequence}" -> [${result}]\n`;
}

var output = getAllOptions("2#0") + getAllOptions("4#2");

setProblem(`Write a JavaScript program to find all the possible options
to replace the hash in a string (Consists of digits and one hash (#))
with a digit to produce an integer divisible by 3
For a string "2*0", the output should be : ["210", "240", "270"]`);

setSolution(output);