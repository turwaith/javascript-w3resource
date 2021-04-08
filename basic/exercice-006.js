setProblem("Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar");

var years = [1992,2000,1900,2088,1569,1847,1884,2021];
var output = "";

years.forEach(item => {
    if((item % 4 == 0 && item % 100 != 0) || item % 400 == 0)
        output += `${item} is a leap year\n`;
    else
        output += `${item} is not a leap year\n`;
});

setSolution(output);