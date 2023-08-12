//Randomly picks the Computer choice.
function getComputerChoice() {
    let rpsArray = ["ROCK", "PAPER", "SCISSORS"];
    let rpsChoice = rpsArray[Math.floor(Math.random() * rpsArray.length)];
    return rpsChoice;
}

//Disable buttons once Player/Computer reaches 3 points
function btnDisable() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}

function myFunction() {
    const centerData = document.querySelector(".reset-button");
    const resetBtn = document.createElement("BUTTON");
    const resetTxt = document.createTextNode("Play Again?");
    resetBtn.appendChild(resetTxt);
    centerData.appendChild(resetBtn);
    // document.body.appendChild(resetBtn);
    resetBtn.addEventListener("click", () => location.reload());
  }

function playRound(userChoice, computerChoice) {
    if (
        (userChoice === "ROCK" && computerChoice === "PAPER") ||
        (userChoice === "PAPER" && computerChoice === "SCISSORS") ||
        (userChoice === "SCISSORS" && computerChoice === "ROCK")
        )  { //Displays message for round loss and assigns the Computer a point
            let cpuPoint = document.querySelector(".score-message h3");
            cpuPoint.textContent = `'${userChoice}' vs '${computerChoice}'. \nComputer gets a Point!`;
            computerScore++
            let pointToCpu = document.querySelector(".cpu-score h3 span")
            pointToCpu.textContent = `${computerScore}`
                if (computerScore === 3) {
                    let cpuWins = document.querySelector(".score-message h3");
                    cpuWins.textContent = `'${userChoice}' loses to '${computerChoice}' \nComputer Wins!`;
                    btnDisable()
                    myFunction()
                }
        } else if (
        (userChoice === "PAPER" && computerChoice === "ROCK") ||
        (userChoice === "SCISSORS" && computerChoice === "PAPER") ||
        (userChoice === "ROCK" && computerChoice === "SCISSORS") 
        ) { //Displays message for round win and assigns the Player a point
            let playerPoint = document.querySelector(".score-message h3");
            playerPoint.textContent = `'${userChoice}' vs '${computerChoice}'. \nPlayer gets a Point!`;
            userScore++
            let pointToPlayer = document.querySelector(".player-score h3 span")
            pointToPlayer.textContent = `${userScore}`
                if (userScore === 3) {
                    let playerWins = document.querySelector(".score-message h3");
                    playerWins.textContent = `'${userChoice}' beats '${computerChoice}' \nCongratulations! You Win!`;
                    btnDisable()
                    myFunction()
                }
        } else if (userChoice === computerChoice) 
        { //Displays message for a tie round and does not add point to either
            let tiePoint = document.querySelector(".score-message h3");
            tiePoint.textContent = `'${userChoice}' vs '${computerChoice}'. \nNobody gets a Point!`;
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
