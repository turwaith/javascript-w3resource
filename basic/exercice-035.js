setProblem(` Write a program to check whether a specified character exists within the 2nd to 4th position in a given string`);

var words = [
    ["javascript", "a"],
    ["python", "y"],
    ["console", "o"],
    ["hardware", "e"],
    ["hardware", "a"],
];
var output = "";

words.forEach(item => {
    let result = item[0].split("").filter(x => x === item[1]).length;
    console.log(result);
    output += `"${item[0]}" contains 2 to 4 '${item[1]}' => ${result >= 2 && result <= 4}\n`;
});

setSolution(output);