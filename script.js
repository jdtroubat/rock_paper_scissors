/** Random Cpu */
function getComputerChoice() {
    let cpuChoice = ["rock", "paper", "scissors"];
    let randomCpu = Math.floor(Math.random() * cpuChoice.length);
    return cpuChoice[randomCpu]; 
}

/** Prompt playerChoice*/
let playerChoice = prompt("Enter Rock, Paper, or Scissors");
playerChoice = playerChoice.toLowerCase();

/** playerChoice vs cpuChoice */
function playerSelection(cpuChoice, playerChoice) {
    if ((playerChoice === "rock" && cpuChoice === "scissors") ||
        (playerChoice === "paper" && cpuChoice === "rock") ||
        (playerChoice === "scissors" && cpuChoice === "paper")) {
        return "You Win, " + playerChoice + " beats " + cpuChoice;
    } else if (playerChoice === cpuChoice){
        return "Tie Game, " + playerChoice + " is equal to " + cpuChoice;
    } else {
        return "You Loose, " + playerChoice + " is beaten by " + cpuChoice;
    }
    
}
/** Uppercase first Letter playerChoice and cpuChoice */
playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
let cpuChoice = getComputerChoice();
cpuChoice = cpuChoice.charAt(0).toUpperCase() + cpuChoice.slice(1);
let result = playerSelection(cpuChoice, playerChoice);

console.log(result);