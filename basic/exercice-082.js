setProblem(`Write a JavaScript to add two positive integers without carry`);

var numbers = [
    [222,911],
    [200,900],
    [22,91],
    [3,8],
    [4,99],
    [999,9],
    [10,0]
];
var output = "";

numbers.forEach(item => {
    let max = Math.max(...item).toString().length;
    let total = (item[0] + item[1]).toString();

    output += `[${item[0]},${item[1]}] => `;

    if(total.length > max)
        output += `${total.split("").slice(1).join("")}\n`;
    else
        output += `${total}\n`
    
});

setSolution(output);