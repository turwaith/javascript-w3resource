setProblem(`Write a JavaScript program to switch case of the minimum possible number of letters
to make a given string written in the upper case or in the lower case`);

var words = ["Write", "PHp", "HelLo", "TurwaiTH", "WoRlD"];
var output = "";

words.forEach(item => {
    let upperCaseCount = 0;
    for (let i = 0; i < item.length; i++) {
        if(item[i] === item[i].toUpperCase())
            upperCaseCount++;
    }

    output += `${item} -> `;
    if(item.length - upperCaseCount >= upperCaseCount)
        output += `${item.toLowerCase()}\n`;
    else
        output += `${item.toUpperCase()}\n`;
});

setSolution(output);