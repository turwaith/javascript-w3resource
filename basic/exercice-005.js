setProblem(`Write a JavaScript program to rotate the string 'w3resource' in right direction by
periodically removing one letter from the end of the string and attaching it to the front`);

var text = "w3resource ";

var animation = setInterval(() => {
    text = text.substring(1,text.length) + text[0];
    solution.textContent = text;    // set text in the solution Tab
}, 250);

// *exclude*
window.addEventListener("change", () => clearInterval(animation));
// *exclude*