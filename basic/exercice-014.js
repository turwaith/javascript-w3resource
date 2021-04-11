setProblem("Write a JavaScript exercise to get the extension of a filename");

solution.innerHTML = `<label for="fileName">Enter your file name</label><br>
<input type="text" id="fileName" name="fileName">
<p id="output"></output>`;

var output = document.getElementById("output")
    fileName = document.getElementById("fileName");

fileName.addEventListener("change", (e) => {
    output.textContent = `The file [${fileName.value}] has extension ${fileName.value.split(".")[1]}`;
})