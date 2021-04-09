setProblem("Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit");

var temperatures = [
    {temp: 60, type: "c"},
    {temp: 45, type: "f"},
    {temp: 96, type: "f"},
    {temp: 15, type: "c"},
    {temp: 60, type: "c"},
    {temp: 3, type: "f"},
];

var output = "";

temperatures.forEach(item => {
    let temp;
    switch(item.type){
        case "c":
            temp = (item.temp * 1.8) + 32;
            output += `${item.temp}°C => ${temp}\n`;
        break;
        case "f":
            temp = (item.temp - 32) / 1.8;
            output += `${item.temp}°F => ${temp}\n`;
        break;
    }
});

setSolution(output);