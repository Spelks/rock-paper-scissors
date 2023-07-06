function getComputerChoice() {
    let rpsArray = ["rock", "paper", "scissors"];
    let rpsChoice = rpsArray[Math.floor(Math.random() * rpsArray.length)];
    if (rpsChoice === "rock") {
        alert("Computer picks 'Rock'!");
    } else if (rpsChoice === "paper") {
        alert("Computer picks 'Paper'!");
    } else {
        alert("Computer picks 'Scissors'!");
    }
    return rpsChoice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("'Rock', 'Paper' or 'Scissors'?").toLowerCase();
    computerSelection = getComputerChoice();
    if (playerSelection === "rock" && computerSelection === "paper") {
        alert("You lose! 'Paper' beats 'Rock'!");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        alert("You win! 'Paper' beats 'Rock'!");
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        alert("You lose! 'Scissors' beats 'Paper'!");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        alert("You win! 'Paper' beats 'Rock'!");
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        alert("You lose! 'Rock' beats 'Scissors'!");
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        alert("You win! 'Rock' beats 'Scissors'!");
    } else if (playerSelection === computerSelection) {
        alert("It's a tie!");
    } else {
        alert("Please select either 'Rock', 'Paper' or 'Scissors'!");
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection)
    }
}

let playerSelection;
let computerSelection;
game()