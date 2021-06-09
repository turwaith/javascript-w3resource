function isCorrentSentence(sentence){
    return `${sentence} -> ${/^[A-Z].*\.$/.test(sentence)}\n`;
}

var output = isCorrentSentence("Hello world !") + isCorrentSentence("Good morning.") + isCorrentSentence("give me five.");

setProblem(`Write a JavaScript program to check whether a given string represents
a correct sentence or not. A string is considered correct sentence if it starts
with the capital letter and ends with a full stop (.)`);

setSolution(output);