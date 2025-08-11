let score = JSON.parse(localStorage.getItem("score")) || {
wins: 0,
losses: 0,
ties: 0
};
updateScoreElem();

function playGame (playerMove) {
const computerMove = pickComputerMove();
let result = "";

// The moves for Scissors
if (playerMove === "Scissors") {
  if (computerMove === "Rock") {
    result = "You lose.";
  } else if (computerMove === "Paper") {
    result = "You win!";
  } else if (computerMove === "Scissors") {
    result = "Tie.";
  }

  // The moves for Paper
} else if (playerMove === "Paper") {
  if (computerMove === "Rock") {
    result = "You win!";
  } else if (computerMove === "Paper") {
    result = "Tie.";
  } else if (computerMove === "Scissors") {
    result = "You lose.";
  }

  // The moves for Rock
} else if (playerMove === "Rock") {
    if (computerMove === "Rock") {
      result = "Tie.";
    } else if (computerMove === "Paper") {
      result = "You lose.";
    } else if (computerMove === "Scissors") {
      result = "You win!";
    }
}

if (result == "You win!") {
  score.wins += 1;
} else if (result == "Tie.") {
  score.ties += 1;
} else {
  score.losses += 1;
}

localStorage.setItem("score", JSON.stringify(score));

updateScoreElem();
// Display the result
document.querySelector(".gameResult").innerHTML = result;
document.querySelector(".gameMoves").innerHTML = `You 
<img src="/images/${playerMove}-emoji.png" class="moveIcon"> <img src="/images/${computerMove}-emoji.png" class="moveIcon"> Computer`;
}

function updateScoreElem () {
document.querySelector(".score").innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}.`;
}

function pickComputerMove() {
const randomNumber =  Math.random();
let computerMove = "";

if (randomNumber >= 0 && randomNumber < 1 / 3) {
  computerMove = "Rock";
} else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
  computerMove = "Paper";
} else {
  computerMove = "Scissors";
}

return computerMove;
}

let isAutoPlaying = false;
let intervalID;

function autoPlay() {
  if (!isAutoPlaying) {
    intervalID = setInterval(function () {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 2000);
    isAutoPlaying = true;
  } else {
    clearInterval(intervalID);
    isAutoPlaying = false;
  }
}