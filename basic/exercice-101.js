setProblem(`Write a JavaScript program to check whether a given string contains only Latin
letters and no two uppercase and no two lowercase letters are in adjacent positions`);

var words = ["xYr", "XXyx", "aBcDeF", "AAbcdef"];
var output = "";

words.forEach(item => {
    let onlyLatin = true;
    for (let i = 0; i < item.length; i++) {
        if(!/[a-zA-Z]|/g.test(item[i])){
            onlyLatin = false;
            break;
        }
    }
    if(!onlyLatin)
        output += `${item} -> The string doesn't contains only latin letters\n`;
    else{
        let previous = "",
            current = "",
            isTwinCase = true;
        output += `${item} -> `;
        for (let i = 0; i < item.length; i++) {
            if(item[i] === item[i].toUpperCase())
                current = "upper";
            else
                current = "lower";            

            if(previous != current)
                previous = current;
            else{
                isTwinCase = false;
                break;
            }
        }
        output += `${isTwinCase}\n`;
    }
});

setSolution(output);