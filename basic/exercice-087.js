setProblem(`Write a JavaScript program to check whether two arrays of
integers of same length are similar or not. The arrays will be similar if one
array can be obtained from another array by swapping at most one pair of
elements`);

var numbers = [
    {arrayOne: [10,20,30], arrayTwo: [10,20,30]},
    {arrayOne: [10,20,30], arrayTwo: [30,10,20]},
    {arrayOne: [10,20,30,40], arrayTwo: [10,30,20,40]},
    {arrayOne: [10,20,30,40,50,60], arrayTwo: [10,20,30,40,60,50]},
    {arrayOne: [10,20,30,40,50,60], arrayTwo: [10,20,30,40,50,60]},
    {arrayOne: [10,20,30,40,50,60], arrayTwo: [60,20,30,40,50,10]}
];
var output = "";

numbers.forEach(item => {
    let result = true;
    let pairUsed = false;
    for (let i = 0; i < item.arrayOne.length -1; i++) {
        if(item.arrayOne[i] != item.arrayTwo[i]){
            if(!pairUsed){
                let temp = item.arrayTwo[i+1];
                if(item.arrayOne[i] === temp){
                    item.arrayTwo[i+1] = item.arrayTwo[i];
                    item.arrayTwo[i] = temp;
                    pairUsed = true;
                }
                else    
                    result = false;
            }
            else
                result = false;   
        }
    }
    output += `[${item.arrayOne}] - [${item.arrayTwo}] => ${result} \n`;
});

setSolution(output);