function getComputerChoice() {  /**Random ComputerChoice */
    let cpuChoice = ["rock", "paper", "scissors"];
    let randomCpu = Math.floor(Math.random() * cpuChoice.length);
    return cpuChoice[randomCpu];
}
  
function playRound(playerChoice, cpuChoice) {   /**Match : Player vs Cpu */
    if (
      (playerChoice === "rock" && cpuChoice === "scissors") ||
      (playerChoice === "paper" && cpuChoice === "rock") ||
      (playerChoice === "scissors" && cpuChoice === "paper")
    ) {
      return "You Win, " + playerChoice + " beats " + cpuChoice;
    } else if (playerChoice === cpuChoice) {
      return "Tie Game, " + playerChoice + " is equal to " + cpuChoice;
    } else {
      return "You Loose, " + playerChoice + " is defeated against " + cpuChoice;
    }
}
  
function game() {  /** 5 Rounds Game */
    let playerScore = 0;
    let cpuScore = 0;
    for (let i = 0; i < 5; i++) {
      let playerChoice = prompt("Enter Rock, Paper, or Scissors");
      playerChoice = playerChoice.toLowerCase(); /**Non sensitive  */
  
      let cpuChoice = getComputerChoice();

      playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);/** Uppercase playerChoice */
      cpuChoice = cpuChoice.charAt(0).toUpperCase() + cpuChoice.slice(1); /**Uppercase cpuChoice */
  
      let result = playRound(playerChoice, cpuChoice);
      

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