setProblem("Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050");

var dateStart = 2014,
    dateEnd = 2050;
var output = "";

for(let i = dateStart; i <= dateEnd; i++){
    if(new Date(`${i}`).getDay() == 0)
        output += `First January is being Sunday is ${i}\n`;       
}

setSolution(output);