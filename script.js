function getComputerChoice() {
    let rpsArray = ["rock", "paper", "scissors"];
    let rpsChoice = rpsArray[Math.floor(Math.random() * rpsArray.length)];
    alert (`Computer picks '${rpsChoice}!'`);
    return rpsChoice;
}

function playRound(userChoice, computerChoice) {
    userChoice = prompt("'Rock', 'Paper' or 'Scissors'?").toLowerCase();
    computerChoice = getComputerChoice();    
    if (
      (userChoice === "rock" && computerChoice === "paper") ||
      (userChoice === "paper" && computerChoice === "scissors") ||
      (userChoice === "scissors" && computerChoice === "rock") 
    )  {
         alert(`You lose! '${computerChoice}' beats '${userChoice}'.`);
         console.log("Point to Computer");
         computerScore++
         return computerScore;
    } else if (
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper") ||
      (userChoice === "rock" && computerChoice === "scissors") 
    ) {
        alert(`You win! '${userChoice}' beats '${computerChoice}'.`);
        console.log("Point to Player");
        userScore++
        return userScore;
    } else if (userChoice === computerChoice) 
      {
        alert("It's a tie!");
    } 
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound(userChoice, computerChoice)
    } if (userScore > computerScore) {
        alert(`Computer: ${computerScore}. You: ${userScore}. YOU WIN!`);
    } else if (userScore < computerScore) {
        alert(`Computer: ${computerScore}. You: ${userScore}. YOU LOSE!`);
    } else if (userScore === computerScore) {
        alert(`Computer: ${computerScore}. You: ${userScore}. IT'S A TIE!`);
    }
}

let userChoice;
let computerChoice;
let userScore = 0;
let computerScore = 0;
game()