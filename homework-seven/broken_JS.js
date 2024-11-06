let PlayerChoice = document.getElementsByClassName("choice");
let compArray = ["Rock", "Paper", "Scissors"];
let innerscore = 0;

function RPS(num) {
  let compDecision = compArray[Math.floor(Math.random() * compArray.length)];
  document.getElementById("resultDecision").innerHTML =
    "The computer chose:" + compDecision;
  if (num == 0) {
    if (compDecision == "Paper") {
      innerscore -= 1;
    }
    if (compDecision == "Scissors") {
      innerscore += 1;
    }
  }

  if (num == 1) {
    if (compDecision == "Rock") {
      innerscore += 1;
    }
    if (compDecision == "Scissors") {
      innerscore -= 1;
    }
  }

  if (num == 2) {
    if (compDecision == "Rock") {
      innerscore -= 1;
    }
    if (compDecision == "Paper") {
      innerscore += 1;
    }
  }
  if (num == 3) {
    innerscore -= 0.5;
  }

  document.getElementById("Score").innerHTML ="Score: "+ innerscore;
}