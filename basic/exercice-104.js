setProblem(`Write a JavaScript program to find two elements of the array such
that their absolute difference is not greater than a given integer but is as
close to the said integer`);

var numbers = [
    {serie: [12, 10, 33, 34], target: 10},
    {serie: [12, 10, 33, 34], target: 24},
    {serie: [12, 10, 33, 44], target: 40},
    {serie: [33, 10, 33, 44], target: 10}
]; 
var output = ``;

numbers.forEach(item => {
    let number = {
        firstNumber:  0,
        secondNumber: 0,
        absDiff: 0};
    
    for (let i = 0; i < item.serie.length - 1; i++) {
        for (let j = i + 1; j < item.serie.length; j++) {
            let diff = Math.abs(item.serie[i] - item.serie[j]);            
                if(Math.abs(item.target - diff) < item.target - number.absDiff){
                    number.firstNumber = item.serie[i];
                    number.secondNumber = item.serie[j];
                    number.absDiff = diff;
                }            
        }  
    }
    output += `[${item.serie}] - [${item.target}] -> [${number.firstNumber},${number.secondNumber}] - [${number.absDiff}]\n`;
});

setSolution(output);