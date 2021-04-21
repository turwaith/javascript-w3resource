setProblem(`Write a JavaScript program to compute the sum of the two given integers.
If the sum is in the range 50..80 return 65 other wise return 80`);

var numbers = [
    [55,34],
    [5,3],
    [35,35],
    [55,20]
];
var output = "";

numbers.forEach(item => {
    let result = item.reduce((x,y) => x + y);
    output += `[${item}] => total => ${result} => ${50 <= result && result <= 80 ? 65 : 80}\n`;
});

setSolution(output);