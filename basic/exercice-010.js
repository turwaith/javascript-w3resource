setProblem(`Write a JavaScript program to calculate multiplication and division of two numbers (input from user)`);

solution.innerHTML = `<form>
<label for="firstNumber">First number</label>
<input type="number" id="firstNumber"> <br>
<label for="secondNumber">First number</label>
<input type="number" id="secondNumber"> <br>
</form>
<button id="multiply">Multiply</button> <button id="divide">Divide</button>
<p id="output"></p>`

var Output = document.getElementById("output"),
    First_number = document.getElementById("firstNumber"),
    Second_number = document.getElementById("secondNumber"),
    Multiply = document.getElementById("multiply"),
    Divide = document.getElementById("divide");

function getNumbers(){
    return {
        firstNumber : parseInt(First_number.value),
        secondNumber : parseInt(Second_number.value)};
}
function mutliply(){
    let {firstNumber, secondNumber} = getNumbers();
    Output.textContent = `The result is : ${firstNumber * secondNumber}`;
}
function divide(){
    let {firstNumber, secondNumber} = getNumbers();
    Output.textContent = `The result is : ${firstNumber / secondNumber}`;
}

Divide.addEventListener("click", divide);
Multiply.addEventListener("click", mutliply);