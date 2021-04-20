setProblem(`Write a JavaScript program to check the total marks of a student in various examinations.
The student will get A+ grade if the total marks are in the range 89..100 inclusive,
    if the examination is "Final-exam" the student will get A+ grade where total marks must be greater than or equal to 90.
Return true if the student get A+ grade or false otherwise`);

var marks = [
    {total: 78, exam: false},
    {total: 89, exam: true},
    {total: 99, exam: true},
];
var output = "";

marks.forEach(item => {
    output += `Total of marks: ${item.total}\nFinal exam: ${item.exam}\nResult: `;
    if(item.exam)
        output += item.total >= 90 ? "A+" : "failed";
    else
        output += (89 <= item.total && item.total <= 100) ? "A+" : "failed";
    output += `\n\n`;
});

setSolution(output);