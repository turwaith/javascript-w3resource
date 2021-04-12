setProblem(` Write a JavaScript program to check two given numbers and
return true if one of the number is 50 or if their sum is 50`);

var numbers = [
    {nb1 : 33, nb2 : 22},{nb1 : 17, nb2 : 34},{nb1 : 50, nb2 : 0},
    {nb1 : 88, nb2 : -22},{nb1 : 61, nb2 : -11},{nb1 : 0, nb2 : 65}
];

var output = "";

numbers.forEach(item => {
    let match = item.nb1 === 50 || item.nb2 === 50 || item.nb1 + item.nb2 === 50;
    output += `${item.nb1} + ${item.nb2} => ${match}\n`;
});

setSolution(output);