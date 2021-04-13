setProblem(`Write a JavaScript program to remove a character at the specified
position of a given string and return the new string`);

var word = "Computer";
var wordSize = word.length;

solution.innerHTML = `<p id="output">${word}</p>
<form action="#">
<label for="letter">Select the character to remove</label><br>
<input type="range" id="letter" min="1" max="${wordSize}" value="1" style="outline:none;">
</form>
<span id="letterOuput">C</span>`;

var output = document.getElementById("output"),
    letterOutput = document.getElementById("letterOuput"),
    range = document.getElementById("word");

document.getElementById("letter").addEventListener("input", (e) => {
    letterOuput.textContent = output.textContent[e.target.value-1];
});

document.getElementById("letter").addEventListener("pointerup", (e) => {
        let value = e.target.value;
        let newWord = output.textContent.slice(0,value-1) + output.textContent.slice(value);
        output.textContent =  newWord;
        e.target.max = newWord.length;
        e.target.value = 1;
        e.target.style.width = `${newWord.length*17}px`;
        letterOuput.textContent = newWord[0];
        if(newWord.length === 0){
            solution.textContent = "Word entierly removed";
        }
});