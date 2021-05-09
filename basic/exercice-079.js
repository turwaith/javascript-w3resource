setProblem(`Write a JavaScript program to test whether a given array of
integers contains 30 and 40 twice. The array length should be 0, 1, or 2`);

var numbers = [
    [30,30],
    [40,40],
    [40,40,40,0,0,0],
    [30,30,30,0,0,0],
    [0],
    [4,40,0,0,3,30]
];
var output = "";

numbers.forEach(item => {
    let twice30 = item.filter(x => x === 30).length >= 2;
    let twice40 = item.filter(x => x === 40).length >= 2;

    output += `[${item}] => ${twice30 || twice40}\n`;
});

setSolution(output);