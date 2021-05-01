setProblem(`Write a JavaScript program to check whether a given string
contains equal number of p's and t's`);

var words = ["ptpt", "txxxtpp", "apple", "train", "apple cottage"];
var output = "";


words.forEach(item => {
    let rgxP = item.replace(/[^p]/g,"").length;
    let rgxT = item.replace(/[^t]/g,"").length;

    output += `${item} => ${rgxP === rgxT}\n`;
});

setSolution(output);