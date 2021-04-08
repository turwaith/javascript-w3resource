setProblem("Write a JavaScript program to calculate days left until next Christmas");

var today = new Date();
var nextXmas = new Date(`December 25, ${today.getFullYear()} 00:00:00`);

if(today.getMonth() == 11 && today.getDate() > 25)
    nextXmas.setFullYear(nextXmas.getFullYear()+1);

var xmasDaysLeft = Math.ceil((nextXmas.getTime() - today.getTime()) /1000/60/60/24) ;

setSolution(`Days until next Christmas: ${(xmasDaysLeft)}`);