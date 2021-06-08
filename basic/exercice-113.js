function getSumOfDiv(n) {
    let x = n;
        total = n;
    
    while(x/2 > 0){
        x = Math.floor(x/2);
        total += x;
    }

    return `${n} -> ${total}\n`;
}

var output = ``;

output = getSumOfDiv(8) + getSumOfDiv(9) + getSumOfDiv(26) + getSumOfDiv(13);

setProblem(`Write a JavaScript program to calculate the sum of n + n/2 + n/4 + n/8 + ....
where n is a positive integer and all divisions are integer`);

setSolution(output);