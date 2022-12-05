function userPlay() {
  let promptText = "Choose: Rock, Paper or Scissors";
  let userInput = prompt(promptText).trim().toLowerCase();
  while (
    userInput !== "rock" &&
    userInput !== "paper" &&
    userInput !== "scissors"
  ) {
    userInput = prompt("Incorrect option\n" + promptText)
      .trim()
      .toLowerCase();
  }
  return userInput;
}

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

let playerScore = 0;
let computerScore = 0;

function playRound() {
  const playerSelection = userPlay();
  const computerSelection = computerPlay();
  if (playerSelection === computerSelection) {
    return "It's a Draw!";
  } else if (playerSelection == "rock") {
    if (computerSelection == "paper") {
      computerScore++;
      return "You lose! Paper beats Rock!";
    } else {
      playerScore++;
      return "You Won! Rock beats Scissors!";
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      computerScore++;
      return "You lose! Rock beats Scissors!";
    } else {
      playerScore++;
      return "You Won! Scissors beats Paper!";
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "scissors") {
      computerScore++;
      return "You lose! Scissors beats Paper!";
    } else {
      playerScore++;
      return "You Won! Paper beats Rock!";
    }
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound());
    computerScore;
    playerScore;
  }
  if (computerScore > playerScore) {
    return `Computer: ${computerScore} points\n Player: ${playerScore} points\n Sorry😿! You lost, better luck next time!`;
  } else if (computerScore < playerScore) {
    return `Computer: ${computerScore} points\n Player: ${playerScore} points\nHOORAY🥳! You Won!`;
  } else {
    return `Computer: ${computerScore} points\n Player: ${playerScore} points\n OMG😱! DRAW, let's TRY AGAIN`;
  }
}

console.log(game());
