setProblem(`Write a JavaScript program to find the shortest possible string
which can create a string to make it a palindrome by adding characters to the
end of it`);

var words = [
    "abcddc",
    "122",
    "aeiou"
];
var output = "";

words.forEach(item => {
    let newItem = null;
    for (let i = 0; i < item.length - 1; i++) {
        if(item[i] === item[i+1]){
            newItem = item.substring(0,i+1) + item.substring(0,i+1).split('').reverse().join('');
        }  
    }
    if(!newItem)
        newItem = item + item.split('').reverse().join('');
    output += `${item} -> ${newItem}\n`;
});

setSolution(output);