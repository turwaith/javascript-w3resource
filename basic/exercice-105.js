setProblem(`Write a JavaScript program to find the number of times to replace a given
number with the sum of its digits until it convert to a single digit number`);

var numbers = [123,156,309,99,40556,9658749459811999];
var output = "";

numbers.forEach(item => {
    let count = 1,
        convertedNb = item.toString().split('').map(x => parseInt(x)).reduce((x,y) => x + y);
        while (convertedNb > 10) {
            convertedNb = convertedNb.toString().split('').map(x => parseInt(x)).reduce((x,y) => x + y);
            count++;
        }

    output += `${item} -> ${count} time${count > 1 ? 's':''}\n`;       

});

setSolution(output);