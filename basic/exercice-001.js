setProblem(` Write a JavaScript program to display the current day and time in the following format.\nToday is : Tuesday.\nCurrent time is : 10 PM : 30 : 38`);

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var time =  new Date();
var day = days[time.getDay()];
var hour = time.getHours();
var minutes = time.getMinutes();
var seconds = time.getSeconds();

//console.log(`Today is : ${day}.\nCurrent time is : ${hour > 12 ? hour - 12 + " PM" : hour} : ${minutes} : ${seconds}`);

setSolution(`Today is : ${day}.\nCurrent time is : ${hour > 12 ? hour - 12 + " PM" : hour} : ${minutes} : ${seconds}`);