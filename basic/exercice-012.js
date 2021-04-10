setProblem("Write a JavaScript program to get the website URL (loading page)");

var urlObject = window.location;
var output = `Host     : ${urlObject.host}
URL      : ${urlObject.href}
Protocol : ${urlObject.protocol.replace(":","")}`;

setSolution(output);