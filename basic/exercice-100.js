setProblem(`Write a JavaScript program to check whether there is at least one
element which occurs in two given sorted arrays of integers`);

var numbers = [
    {arrayOne: [1,2,3], arrayTwo: [3,4,5]},
    {arrayOne: [1,2,3], arrayTwo: [5,6,7]},
    {arrayOne: [1,0,2], arrayTwo: [8,0,8]},
];
var output = "";

numbers.forEach(item => {
    let result = false;

    for (let i = 0; i < item.arrayOne.length; i++) {
        if(item.arrayTwo.indexOf(item.arrayOne[i]) != -1){
            result = true;
            break;
        }
    }

    output += `[${item.arrayOne}] - [${item.arrayTwo}] -> ${result}\n`;
});

setSolution(output);