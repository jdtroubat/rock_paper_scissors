function getComputerChoice() {
    const cpuChoices = ["Rock", "Paper", "Scissors"];
    const randomCpu = Math.floor(Math.random() * cpuChoices.length);
    return cpuChoices[randomCpu]; 
}

console.log(getComputerChoice());