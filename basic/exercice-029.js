setProblem(`Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive).
Return true if one or more of them are in the said range`);

var numbers = [
    [23,4,50],
    [0,39,9],
    [5,15,0],
    [77,0,103],
];
var output = "";

numbers.forEach(item => {
    let result = false;    
    for (const subItem of item.entries()) {
        if(subItem[1] >= 50 && subItem[1] <= 99){
            result = true;
            break;
        }
    }
    output += `[${item}] => ${result}\n`;
});

setSolution(output);