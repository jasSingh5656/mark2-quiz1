var readline = require("readline-sync");

var userName = readline.question("What is your name? ");
console.log("Welcome " + userName + " to DO YOU KNOW Jasmeet");

var score = 0;

function play(question, answer) {
  var userAnswer = readline.question(question);

  if (userAnswer === answer) {
    console.log("You were right");
    score = score + 1;
  } else {
    console.log("You were wrong");
  }

  console.log("Current score: " + score);
  console.log("-------------------------------------");
}

var questions = [
  {
    question: "What is Jasmeet age? ",
    answer: "23",
  },

  {
    question: "Where do jasmeet live? ",
    answer: "pune",
  },

  {
    question: "What is his last name? ",
    answer: "One piece",
  },

  {
    question: "How many siblings does jasmeet have? ",
    answer: "1",
  },

  {
    question: "jasmeet's college location? ",
    answer: "lohegaon",
  },
];

for (var i = 0; i < questions.length; i++) {
  var currentOuestion = questions[i];
  play(currentOuestion.question, currentOuestion.answer);
}

console.log("Your total score is " + score);
