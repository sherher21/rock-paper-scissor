let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  let play = ["rock", "paper", "scissor"];
  return play[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  //playerSelection = playerSelection.toLowerCase();
  //computerSelection = computerSelection.toLowerCase();
  let result = document.querySelector('.call-out');
  let point = 0;

  if (playerSelection === "rock") {
    switch (computerSelection) {
      case "rock":
        result.textContent = "Tie! Rock does not beat Rock";
        break;
      case "paper":
        result.textContent = "You Lose! Paper beats Rock";
        point--;
        break;
      case "scissor":
        result.textContent = "You Win! Rock beats Scissor";
        point++;
        break;
      default:
        result.textContent = "Error1!";
        break;
    }
  }
  if (playerSelection === "paper") {
    switch (computerSelection) {
      case "rock":
        result.textContent = "You Win! Paper beats Rock";
        point++;
        break;
      case "paper":
        result.textContent = "Tie! Paper does not beat Paper";
        break;
      case "scissor":
        result.textContent = "You Lose! Scissor beats Paper";
        point--;
        break;
      default:
        result.textContent = "Error2!";
        break;
    }
  }
  if (playerSelection === "scissor") {
    switch (computerSelection) {
      case "rock":
        result.textContent = "You Lose! Rock beats Scissor";
        point--;
        break;
      case "paper":
        result.textContent = "You Win! Scissor beats Paper";
        point++;
        break;
      case "scissor":
        result.textContent = "Tie! Scissor does not beat Scissor";
        break;
      default:
        result.textContent = "Error3!";
        break;
    }
  }
  console.log(result.textContent);
  return point;
}
/*
function game() {
  let playerPlay;
  let score = 0;
  for (let i = 0; i < 5; i++) {
    playerPlay = prompt("Enter rock, paper or scissor:");
    console.log(`Round ${i + 1}`);
    score += playRound(playerPlay, computerPlay());
  }
  if (score > 0) {
    console.log("Winner");
  }
  else if (score < 0) {
    console.log("Loser");
  }
  else if (score === 0) {
    console.log("Tie");
  }
}
*/

function declareWinner() {
  let callOut = document.querySelector('.call-out');
  if (playerScore > computerScore) {
    callOut.textContent = "You Win!";
  }
  else {
    callOut.textContent = "You Lose!";
  }
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('click', () => {

    let pScore = document.querySelector('.player');
    let cScore = document.querySelector('.computer');
    
    if (playerScore > 4 || computerScore > 4) {
      playerScore = 0;
      computerScore = 0;
    }

    let playerSelection = button.id;
    let computerSelection = computerPlay();
    let score = playRound(playerSelection, computerSelection);
    if (score > 0) {
      playerScore++;
    }
    else if (score < 0) {
      computerScore++;
    }

    pScore.textContent = playerScore;
    cScore.textContent = computerScore;

    if (playerScore === 5 || computerScore === 5) {
      declareWinner();
    }

  });
});



//game();
