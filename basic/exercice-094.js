setProblem(`Write a JavaScript program to find the number which appears most in a given array of integers`);

var numbers = [
    [1,2,3,2,2,8,1,9],
    [0,4,8,3,5,8,0,0],
    [1,4,8,9,5,3,6,6],
    [2,3,4,5,6,7,8,9]
];
var output = "";

numbers.forEach(item => {
    let total = {nb: 0, ct: 0};
    for (let i = 0; i < item.length; i++) {
        let count = item.filter(x => x === item[i]).length;
        if(total.ct < count){
            total.nb = item[i];
            total.ct = count;
        }
            
    }

    if(total.ct <= 1)
        output += `[${item}] -> No items appears most than another\n`;
    else
        output += `[${item}] -> item ${total.nb} appears ${total.ct} times\n`
});

setSolution(output);