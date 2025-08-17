let score = JSON.parse(localStorage.getItem("score")) || {
wins: 0,
losses: 0,
ties: 0
};
updateScoreElem();

document.body.addEventListener("keydown", (event) => {
  console.log(event.key);
  if (event.key === "r") {
    playGame("Rock");
  } else if (event.key === "p") {
    playGame ("Paper"); 
  } else if (event.key === "s") {
    playGame("Scissors");
  }
})

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
    intervalID = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 2000);
    isAutoPlaying = true;
    document.querySelector(".autoPlayBtn").innerHTML = "Stop Playing";
  } else {
    clearInterval(intervalID);
    isAutoPlaying = false;
    document.querySelector(".autoPlayBtn").innerHTML = "Auto Play!";
  }
}

function resetScore () {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem(score);
  updateScoreElem();
};

document.querySelector(".rockBtn").addEventListener("click", () => {
  playGame("Rock");
});

document.querySelector(".paperBtn").addEventListener("click", () => {
  playGame("Paper");
});

document.querySelector(".scissorsBtn").addEventListener("click", () => {
  playGame("Scissors");
});

document.querySelector(".autoPlayBtn").addEventListener("click", () => {
  autoPlay();
});

document.body.addEventListener("keydown", (event) => {
  if (event.key === "a") {
    autoPlay();
  } else if (event.key === "Backspace") {
    resetScore();
  }
});

document.querySelector(".resetScore").addEventListener("click", () => {
  resetScore();
});