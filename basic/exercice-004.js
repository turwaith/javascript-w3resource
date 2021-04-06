setProblem("Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7");
/*
Heron's formula states that the area of a triangle whose sides have lengths a,b,c is 
    Area = &#x221A;(s(s-a)(s-b)(s-c))
whehre s is the semiperimeter of the triangle; that is
    SemiPerimeter = (a+b+c)/2
*/

var sideA = 5,
    sideB = 6,
    sideC = 7;

var semiPerimeter = (sideA + sideB + sideC) / 2;
var area = Math.sqrt(semiPerimeter * (semiPerimeter - sideA) * (semiPerimeter - sideB) * (semiPerimeter - sideC));

setSolution(`The area of a triangle with the following three lengths:\na: 5\nb: 6\nc: 7\narea: ${area}`);

