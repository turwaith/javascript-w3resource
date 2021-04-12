setProblem(`Write a JavaScript program to check from two given integers, whether one is positive and another one is negative`);

var numbers = [
    {nb1 : 33, nb2 : -22},{nb1 : 17, nb2 : 34},{nb1 : -50, nb2 : 0},
    {nb1 : -88, nb2 : -22},{nb1 : -61, nb2 : -11},{nb1 : 5, nb2 : -65}
];

var output = "";

numbers.forEach(item => {
    let match = (item.nb1 > 0 && item.nb2 < 0) || (item.nb1 < 0 && item.nb2 > 0);
    output += `[${item.nb1},${item.nb2}] => ${match}\n`;
});

setSolution(output);