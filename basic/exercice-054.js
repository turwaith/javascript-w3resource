setProblem(`Write a JavaScript program to count the number of vowels in a
given string`);

var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
var words  = ["Javascript", "code", "nicolas", "w3resource.com"];
var output = "";

words.forEach(item => {
    let count = item.split("").filter(x => vowels.includes(x)).length;

    output += `${item} has ${count} vowel${count>0?"s":""}\n`;
});

setSolution(output);