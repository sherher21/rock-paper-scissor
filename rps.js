function computerPlay() {
  let play = ["Rock", "Paper", "Scissor"];
  return play[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  let result;
  let point = 0;
  if (playerSelection === "rock") {
    switch (computerSelection) {
      case "rock":
        result = "Tie! Rock does not beat Rock";
        break;
      case "paper":
        result = "You Lose! Paper beats Rock";
        point--;
        break;
      case "scissor":
        result = "You Win! Rock beats Scissor";
        point++;
        break;
      default:
        result = "Error!";
        break;
    }
  }
  if (playerSelection === "paper") {
    switch (computerSelection) {
      case "rock":
        result = "You Win! Paper beats Rock";
        point++;
        break;
      case "paper":
        result = "Tie! Paper does not beat Paper";
        break;
      case "scissor":
        result = "You Lose! Scissor beats Paper";
        point--;
        break;
      default:
        result = "Error!";
        break;
    }
  }
  if (playerSelection === "scissor") {
    switch (computerSelection) {
      case "rock":
        result = "You Lose! Rock beats Scissor";
        point--;
        break;
      case "paper":
        result = "You Win! Scissor beats Paper";
        point++;
        break;
      case "scissor":
        result = "Tie! Scissor does not beat Scissor";
        break;
      default:
        result = "Error!";
        break;
    }
  }
  console.log(result);
  return point;
}

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

game();
