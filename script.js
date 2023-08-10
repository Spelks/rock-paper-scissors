//Randomly picks the Computer choice.
function getComputerChoice() {
    let rpsArray = ["ROCK", "PAPER", "SCISSORS"];
    let rpsChoice = rpsArray[Math.floor(Math.random() * rpsArray.length)];
    return rpsChoice;
}

//Takes the player choice and compares it to the random Computer choice.
function playRound(userChoice, computerChoice) { 
    if (
      (userChoice === "ROCK" && computerChoice === "PAPER") ||
      (userChoice === "PAPER" && computerChoice === "SCISSORS") ||
      (userChoice === "SCISSORS" && computerChoice === "ROCK") 
    )  { //Displays message for round loss and assigns the Computer a point
         let cpuPoint = document.querySelector(".score-message h3");
         cpuPoint.textContent = `COMPUTER GETS A POINT! \nComputer picked '${computerChoice}'. \nYou picked '${userChoice}' !`;
         computerScore++
         let pointToCpu = document.querySelector(".cpu-score h3 span")
         pointToCpu.textContent = `${computerScore}`
         return computerScore;
    } else if (
      (userChoice === "PAPER" && computerChoice === "ROCK") ||
      (userChoice === "SCISSORS" && computerChoice === "PAPER") ||
      (userChoice === "ROCK" && computerChoice === "SCISSORS") 
    ) { //Displays message for round win and assigns the Player a point
         let playerPoint = document.querySelector(".score-message h3");
         playerPoint.textContent = `YOU GET A POINT! \nComputer picked '${computerChoice}'. \nYou picked '${userChoice}' !`;
         userScore++
         let pointToPlayer = document.querySelector(".player-score h3 span")
         pointToPlayer.textContent = `${userScore}`
        return userScore;
    } else if (userChoice === computerChoice) 
      { //Displays message for a tie round and does not add point to either
        let tiePoint = document.querySelector(".score-message h3");
        tiePoint.textContent = `NO POINTS! \nComputer picked '${computerChoice}'. \nYou picked '${userChoice}' !`;
    } 
}

// Game function to loop a single game through 5 rounds before declaring a winner
function game() {
    for (let i = 0; i < 5; i++) {
        userChoice = "";
        computerChoice = getComputerChoice();   
        playRound(userChoice, computerChoice)
    } if (userScore > computerScore) {
        let playerWins = document.querySelector(".score-message h3");
        playerWins.textContent = "Congratulations! \nYou beat the Computer.";
    } else if (userScore < computerScore) {
        let cpuWins = document.querySelector(".score-message h3");
        cpuWins.textContent ="Computer wins! \nTry again?";
    } else if (userScore === computerScore) {
        let noWins = document.querySelector(".score-message h3");
        noWins.textContent ="Game ends in a draw!";
    }
}

// Player button functionality
const rockBtn = document.querySelector(".rock-btn");
rockBtn.addEventListener("click", () => {
    playRound(userChoice = "ROCK", computerChoice = getComputerChoice());
});
const paperBtn = document.querySelector(".paper-btn");
paperBtn.addEventListener("click", () => {
    playRound(userChoice = "PAPER", computerChoice = getComputerChoice());
})
const scissorsBtn = document.querySelector(".scissors-btn");
scissorsBtn.addEventListener("click", () => {
    playRound(userChoice = "SCISSORS", computerChoice = getComputerChoice());
})

let userScore = 0;
let computerScore = 0;
game()