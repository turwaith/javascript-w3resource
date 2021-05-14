setProblem(`Write a JavaScript program to find the types of a given angle
Types of angles:
* Acute angle: An angle between 0 and 90 degrees.
* Right angle: An 90 degree angle.
* Obtuse angle: An angle between 90 and 180 degrees.
* Straight angle: A 180 degree angle`);

var angles = [47,90,145,180];
var output = "";

angles.forEach(item => {
    output += `${item} => `;
    switch (true) {
        case item < 90:
            output += `Acute angle`;
            break;
        case item === 90:
            output += `Right angle`;
            break;
        case item < 180:
            output += `Obtuse angle`;
            break;
        case item === 180:
            output += `Straight angle`;
            break;
    }
    output += `\n`;
});

setSolution(output);