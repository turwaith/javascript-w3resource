setProblem("Write a JavaScript program to get the current date");

var time = new Date();
var month = time.getMonth();
var day = time.getDate();
var year = time.getFullYear();

setSolution(`${month}-${day}-${year}`);