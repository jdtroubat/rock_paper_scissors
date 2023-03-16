const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");
let playerScore = 0;
let cpuScore = 0;

document.addEventListener("DOMContentLoaded", function() {   //Buttons
  const rockBtn = document.getElementById("rock");
  const paperBtn = document.getElementById("paper");
  const scissorsBtn= document.getElementById("scissors");

  
  
  updateScore();


  rockBtn.addEventListener("click", function() {
    playRound("rock");
  });

  paperBtn.addEventListener("click", function() {
    playRound("paper");
  });

  scissorsBtn.addEventListener("click", function() {;
    playRound("scissors")
  });
});


function getComputerChoice() {  /**Random ComputerChoice */
    let computerSelection = ["rock", "paper", "scissors"];
    let randomCpu = Math.floor(Math.random() * computerSelection.length);
    return computerSelection[randomCpu];
}

function playRound(playerSelection) {
  const resultElement = document.getElementById("result");
  const scoreElement = document.getElementById("score");

  let computerSelection = getComputerChoice();
  let result = getResult(playerSelection, computerSelection);
  resultElement.textContent = result;

  if(result.includes("Win")) {
    playerScore++;
  } else if(result.includes("Lose")){
    cpuScore++;
  }
  updateScore();
  
  if (playerScore >=5 || cpuScore >=5) {
    announceWinner();
  }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
  
function getResult(playerSelection, computerSelection) {
  const capitalizedPlayerSelection = capitalizeFirstLetter(playerSelection);
  const capitalizedComputerSelection = capitalizeFirstLetter(computerSelection);

  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "You Win, " + capitalizedPlayerSelection + " beats " + capitalizedComputerSelection;
  } else if (playerSelection === computerSelection) {
    return "Tie Game, " + capitalizedPlayerSelection + " is equal to " + capitalizedComputerSelection;
  } else {
    return "You Lose, " + capitalizedPlayerSelection + " is defeated against " + capitalizedComputerSelection;
  }
}
   
function updateScore() {
  scoreElement.textContent = "Player Score: " + playerScore + " - CPU Score: " + cpuScore;
}
    
function announceWinner() {
  if (playerScore > cpuScore) {
    resultElement.textContent = "Congratulations, you won the game";
  } else if (playerScore === cpuScore) {
    resultElement.textContent = "The game is tied";
  } else {
    resultElement.textContent = "Sorry, you lost the game";
  }
    
  playerScore = 0;
  cpuScore = 0;
  updateScore();
}


