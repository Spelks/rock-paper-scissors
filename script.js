//Randomly picks the Computer choice and highlights it in UI.
function getComputerChoice() {
    let rpsArray = ["ROCK", "PAPER", "SCISSORS"];
    let rpsChoice = rpsArray[Math.floor(Math.random() * rpsArray.length)];
    const rpsRock = document.querySelector(".rock-cpu");
    const rpsPaper = document.querySelector(".paper-cpu");
    const rpsScissors = document.querySelector(".scissors-cpu");
    if (rpsChoice === "ROCK") {
        rpsRock.style.cssText = 
        "background-color: grey; box-shadow: 0 0 50px 15px rgb(255, 45, 45);";
        rpsPaper.style.cssText = null;
        rpsScissors.style.cssText = null;
    } else if (rpsChoice === "PAPER") {
        rpsRock.style.cssText = null
        rpsPaper.style.cssText =
        "background-color: grey; box-shadow: 0 0 50px 15px rgb(255, 45, 45);";
        rpsScissors.style.cssText = null;
    } else if (rpsChoice === "SCISSORS") {
        rpsRock.style.cssText = null;
        rpsPaper.style.cssText = null;
        rpsScissors.style.cssText =
        "background-color: grey; box-shadow: 0 0 50px 15px rgb(255, 45, 45);";
    }
    return rpsChoice;
}

//Disable buttons once Player/Computer reaches 3 points
function btnDisable() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}

//Reset button that appears once the game reaches the end
function btnReset() {
    const centerData = document.querySelector(".reset-button");
    const resetBtn = document.createElement("BUTTON");
    resetBtn.style.cssText = 
    "border: 10px solid #00FF6C; padding: 10px 20px; border-radius: 30px;" + 
    "font-size: 2rem; color: #fff; background-color: transparent; cursor: pointer;";
    const resetTxt = document.createTextNode("Play Again?");
    resetBtn.appendChild(resetTxt);
    centerData.appendChild(resetBtn);
    resetBtn.addEventListener("click", () => location.reload());
  }

  //Main game code. Matches button event lister clicks to getComputerChoice function and rounds up to end of game
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
                    btnReset()
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
                    btnReset()
                }
        } else if (userChoice === computerChoice) 
        { //Displays message for a tie round and does not add point to either
            let tiePoint = document.querySelector(".score-message h3");
            tiePoint.textContent = `'${userChoice}' vs '${computerChoice}'. \nNobody gets a Point!`;
        }
    }

function userUI(userChoice) {
    const userRock = document.querySelector(".rock-btn");
    const userPaper = document.querySelector(".paper-btn");
    const userScissors = document.querySelector(".scissors-btn");
    if (userChoice === "ROCK") {
        userRock.style.cssText = "background-color: grey; box-shadow: 0 0 50px 15px #00FF6C;";
        userPaper.style.cssText = null;
        userScissors.style.cssText = null;
    } else if (userChoice === "PAPER") {
        userRock.style.cssText = null;
        userPaper.style.cssText = "background-color: grey; box-shadow: 0 0 50px 15px #00FF6C;";
        userScissors.style.cssText = null;
    } else if (userChoice === "SCISSORS") {
        userRock.style.cssText = null;
        userPaper.style.cssText = null;
        userScissors.style.cssText = "background-color: grey; box-shadow: 0 0 50px 15px #00FF6C;";
    }
}

// Player button functionality
const rockBtn = document.querySelector(".rock-btn");
rockBtn.addEventListener("click", () => {
    playRound(userChoice = "ROCK", computerChoice = getComputerChoice());
    userUI(userChoice);
});
const paperBtn = document.querySelector(".paper-btn");
paperBtn.addEventListener("click", () => {
    playRound(userChoice = "PAPER", computerChoice = getComputerChoice());
    userUI(userChoice);
})
const scissorsBtn = document.querySelector(".scissors-btn");
scissorsBtn.addEventListener("click", () => {
    playRound(userChoice = "SCISSORS", computerChoice = getComputerChoice());
    userUI(userChoice);
})

//Global variables to ensure blank slate at start of game
let userScore = 0;
let computerScore = 0;