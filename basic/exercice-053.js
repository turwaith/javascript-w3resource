setProblem(`Write a JavaScript program to check whether the characters a and
b are separated by exactly 3 places anywhere (at least once) in a given
string`);

var words = ["Chainsbreak", "pane borrowed", "abCheck", "acdfb"];
var output = "";

words.forEach(item => {
    let aIndex = item.indexOf('a');
    let bIndex = item.indexOf('b', aIndex);

    output += `${item} => ${bIndex - aIndex === 4}\n`;
});

setSolution(output);