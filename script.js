function getComputerChoice() {
    let rpsArray = ["rock", "paper", "scissors"];
    let rpsChoice = rpsArray[Math.floor(Math.random() * rpsArray.length)];
    if (rpsChoice === "rock") {
        return "Computer picks 'Rock'!";
    } else if (rpsChoice === "paper") {
        return "Computer picks 'Paper'!";
    } else {
        return "Computer picks 'Scissors'!";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! 'Paper' beats 'Rock'!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! 'Paper' beats 'Rock'!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! 'Paper' beats 'Rock'!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! 'Paper' beats 'Rock'!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! 'Rock' beats 'Scissors'!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! 'Rock' beats 'Scissors'!";
    } else if (playerSelection === computerSelection) {
        return "It's a tie!"
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));



