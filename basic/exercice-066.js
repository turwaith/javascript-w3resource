setProblem(`Write a JavaScript program to display the city name if the string
begins with "Los" or "New" otherwise return blank`);

var words = ["New wave", "Los Alamos", "Hello world", "Lost"];
var output = "";

words.forEach(item => {
    let result = "";

    if(item.startsWith("Los"))
        result = "Los Angeles";
    else if(item.startsWith("New"))
        result = "New-York";

    output += `${item} => ${result}\n`;
});

setSolution(output);