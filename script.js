document.addEventListener("DOMContentLoaded", function() {   //Buttons
  const rockBtn = document.getElementById("rock");
  const paperBtn = document.getElementById("paper");
  const scissorsBtn= document.getElementById("scissors");

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
  
function playRound(playerSelection, computerSelection) {   /**Match : Player vs Cpu */
    if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      return "You Win, " + playerSelection + " beats " + computerSelection;
    } else if (playerSelection === computerSelection) {
      return "Tie Game, " + playerSelection + " is equal to " + computerSelection;
    } else {
      return "You Loose, " + playerSelection + " is defeated against " + computerSelection;
    }
}

function game() {  /** 5 Rounds Game */
    let playerScore = 0;
    let cpuScore = 0;
    for (let i = 0; i < 5; i++) {
      let playerSelection = prompt("Enter Rock, Paper, or Scissors");
      playerSelection = playerSelection.toLowerCase(); /**Non sensitive  */
  
      let computerSelection = getComputerChoice();

      playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);/** Uppercase playerSelection */
      computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1); /**Uppercase computerSelection */
  
      let result = playRound(playerSelection, computerSelection);
      

      console.log(result);
  
      if (result.includes("Win")) {
        playerScore++;
      } else if (result.includes("Loose")) {
        cpuScore++;
      }
    }
  
    console.log("Player Score: " + playerScore);
    console.log("CPU Score: " + cpuScore);
  
    if (playerScore > cpuScore) {
        console.log("Congratulations, you won the game!");
    } else if (playerScore === cpuScore) {
        console.log("The game is tied.");
    } else {
        console.log("Sorry, you lost the game.");
    }
}

game();


