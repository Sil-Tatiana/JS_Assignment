function computerPlay() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else if (randomNumber === 2) {
    return "scissors";
  }
}

// console.log(computerPlay());

function singleRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    return "It's a Draw!";
  } else if (playerSelection == "rock") {
    if (computerSelection == "paper") {
      return "You lose! Paper beats Rock";
    } else {
      return "You Won!";
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      return "You lose! Rock beats Scissors";
    } else {
      return "You Won!";
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "scissors") {
      return "You lose! Scissors beats Paper";
    } else {
      return "You Won!";
    }
  }
}

console.log(singleRound("scissors", "scissors"));
