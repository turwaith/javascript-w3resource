setProblem(`Write a JavaScript program to sort an array of all prime numbers between 1 and a given integer`);

var numbers = [5,11,19,100];
var output = ``;

numbers.forEach(item => {
    let allNb = [],
        primes = [];

    for (let i = 2; i <= item ; i++) {
        allNb.push(i);
    }

    while(allNb.length > 0){
        let prime = allNb.shift();
        primes.push(prime);

        for (let i = 0; i < allNb.length; i++) {
            if(allNb[i] % prime === 0)
               allNb.splice(i,1);
        }
    }

    output += `${item} -> [${primes}] - Size of ${primes.length}\n`;
});

setSolution(output);