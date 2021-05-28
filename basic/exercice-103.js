setProblem(`Write a JavaScript program to find the maximal number from a
given positive integer by deleting exactly one digit of the given number`);

var numbers = [100,10,1245,890,889,3201,4406];
var output = ``;

numbers.forEach(item => {
    let max = 0,
        number = item.toString();

    for (let i = 0; i < number.length; i++) {
        let newNumber = parseInt(number.substring(0,i) + number.substring(i+1));
        if(max < newNumber)
            max = newNumber;
    }

    output += `${item} -> ${max}\n`;
});

setSolution(output);