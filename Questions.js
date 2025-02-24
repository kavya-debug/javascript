const readlineSync = require('readline-sync');
var colors = require('colors');
let name = readlineSync.question(colors.grey('Please enter your name? : '));


let questions = {
    data: [

        {
            "Q": "1. how many primitive datatypes in javascript?",
            "options":
                `1. 5
     2. 4
     3. 6
     4. 3
    `,
            "correctAnswer": "1"
        },
        {
            "Q": "2. which one is true in hoisting?",
            "options":
                `1. let and const can be hoisted like var.
         2. only let is hoisted in TDZ
         3. only const is hoisted in TDZ
         4. Both let and const can be hoisted in TDZ.
        `,
            "correctAnswer": "4"
        },
        {
            "Q": "3. Which of the following is true (a === b)",
            "options":
                `1. a="5",b=5
             2. a=0,b=-1
             3. a=3,b=3
             4. a=0,b="6"
            `,
            "correctAnswer": "3"
        },

    ]

}

let leadrBoard = [

    { name: "kavya", score: 2 },
    { name: "durga", score: 1, },
    { name: "ramana", score: 1, },
    { name: "bharath", score: 2 }

]


function showQuestions() {
    let count = 0;

    for (let i = 0; i < questions.data.length; i++) {

        // for(let j=0; j<questions.data.length ; j++){
        console.log(questions.data[i].Q);
        console.log(questions.data[i].options);
        const answer = readlineSync.question(colors.grey('Please enter your answer? : '));
        console.log(colors.green("Correct answer is :",questions.data[i].correctAnswer));
        // }    
        if (answer === questions.data[i].correctAnswer) {
            count++
        }
    }

    leadrBoard.push({ "name": name, "score": count });
    console.log(colors.red("Number of wrong answers are : ",(3 - count)));

    console.log(colors.yellow("Your score is : ",count));

}

showQuestions();

leadrBoard.sort((a, b) => b.score - a.score) ;
console.log(colors.yellow("Check your score on leaderboard?"));
console.log(leadrBoard);




