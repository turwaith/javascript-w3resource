setProblem(`Write a JavaScript program to find two elements of the array such
that their absolute difference is not greater than a given integer but is as
close to the said integer`);

var numbers = [
    {serie: [12, 10, 33, 34], target: 10},
    {serie: [12, 10, 33, 34], target: 24},
    {serie: [12, 10, 33, 44], target: 40},
]; 
var output = ``;

numbers.forEach(item => {
    let number = {
        firstNumber:  0,
        secondNumber: 0,
        absDiff: 0};
    
    for (let i = 0; i < item.serie.length; i++) {
        for (let j = i + 1; j < item.serie.length -1; j++) {
            let diff = Math.abs(item.serie[i] - item.serie[j]);
            if(diff <= item.target){
                if(number.absDiff < diff){
                number.absDiff = diff;
                number.firstNumber = item.serie[i];
                number.secondNumber = item.serie[j];}
            }
        }  
    }
    output += `[${item.serie}] - [${item.target}] -> [${number.firstNumber},${number.secondNumber}] - [${number.absDiff}]\n`;
});

setSolution(output);