setProblem("Write a JavaScript exercise to create a variable using a user-defined name");

solution.innerHTML = `<p>
Type the variable name you want then you will get the content of <br>
'userValue' variable already stored in the program which contains 'Hello' + your variable name
</p>
<input type="text" id="userVar" placeholder="Enter your variable name"><br>
<p id="output"></p>`;

var output =  document.getElementById("output");

document.getElementById("userVar").addEventListener("input", (e) => {
    let userVar = e.target.value;
    let userValue = `Hello ${userVar}`;
    this[userVar] = userValue;
    if(userVar === "")
        output.textContent = "";
    else
        output.textContent = this[userVar];
});