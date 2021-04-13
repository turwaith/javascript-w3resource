setProblem(`Write a JavaScript program to create a new string adding "Py" in front of a given string.
If the given string begins with "Py" then return the original string`);

var words = ["python", "sea","thon", "Pythagore", "Chemical"];
var output = "";

words.forEach(item => {
    output += `${item} => `;
    if(item.substring(0,2).toLowerCase() === "py")
        output += `${item}\n`;
    else
        output += `Py${item}\n`;
});

setSolution(output);