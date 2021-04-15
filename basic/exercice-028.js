setProblem(`Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive).
Return true if either of them are in the said range`);

var numbers = [
    {nb1 : 45 , nb2 : 55},
    {nb1 : 66 , nb2 : 0},
    {nb1 : 5 , nb2 : 6},
    {nb1 : 99 , nb2 : 9},
];
var output = "";

numbers.forEach(item => {
    let result = (item.nb1 >= 50 && item.nb1 <= 99) || (item.nb2 >= 50 && item.nb2 <= 99);
    output += `[${item.nb1},${item.nb2}] => ${result}\n`;
});

setSolution(output);