#! usr/bin/env node

import inquirer from "inquirer";

const quizQuestion: {
  Question1: string;
  Question2: string;
  Question3: string;
  Question4: string;
  Question5: string;
} = await inquirer.prompt([
  {
    name: "Question1",
    type: "list",
    message: "Which language is known as the language of the web?",
    choices: ["Python", "JavaScript", "Ruby"],
  },
  {
    name: "Question2",
    type: "list",
    message: "What is the highest peak in Pakistan?",
    choices: ["K2", "Nanga Parbat", "Rakaposhi"],
  },
  {
    name: "Question3",
    type: "list",
    message: "Which type in TypeScript represents the absence of any value?",
    choices: ["null", "undefined", "void"],
  },
  {
    name: "Question4",
    type: "list",
    message: "What is the largest planet in our solar system?",
    choices: ["Earth", "Jupiter", "Saturn"],
  },
  {
    name: "Question5",
    type: "list",
    message: "Which element has the chemical symbol 'O'?",
    choices: ["Oxygen", "Gold", "Silver"],
  },
]);

let score: number = 0;

if (quizQuestion.Question1 === "JavaScript") {
  console.log("Correct Answer");
  ++score;
} else {
  console.log("Incorrect Answer, The Correct Answer Was JavaScript.");
}

if (quizQuestion.Question2 === "K2") {
  console.log("Correct Answer");
  ++score;
} else {
  console.log("Incorrect Answer, The Correct Answer Was K2.");
}

if (quizQuestion.Question3 === "void") {
  console.log("Correct Answer");
  ++score;
} else {
  console.log("Incorrect Answer, The Correct Answer Was void.");
}

if (quizQuestion.Question4 === "Jupiter") {
  console.log("Correct Answer");
  ++score;
} else {
  console.log("Incorrect Answer, The Correct Answer Was Jupiter.");
}

switch (quizQuestion.Question5) {
  case "Oxygen":
    console.log("Correct Answer");
    ++score;
    break;
  default:
    console.log("Incorrect Answer, The Correct Answer Was Oxygen.");
}

console.log(`Your Score is ${score}`);

