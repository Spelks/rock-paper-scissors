function getComputerChoice() {
    let rpsArray = ["ROCK", "PAPER", "SCISSORS"];
    let rpsChoice = rpsArray[Math.floor(Math.random() * rpsArray.length)];
    // alert (`Computer picks '${rpsChoice}!'`);
    return rpsChoice;
}

function playRound(userChoice, computerChoice) { 
    if (
      (userChoice === "ROCK" && computerChoice === "PAPER") ||
      (userChoice === "PAPER" && computerChoice === "SCISSORS") ||
      (userChoice === "SCISSORS" && computerChoice === "ROCK") 
    )  {
        //  alert(`You lose! '${computerChoice}' beats '${userChoice}'.`);
         console.log("Point to Computer");
         computerScore++
         return computerScore;
    } else if (
      (userChoice === "PAPER" && computerChoice === "ROCK") ||
      (userChoice === "SCISSORS" && computerChoice === "PAPER") ||
      (userChoice === "ROCK" && computerChoice === "SCISSORS") 
    ) {
        // alert(`You win! '${userChoice}' beats '${computerChoice}'.`);
        console.log("Point to Player");
        userScore++
        return userScore;
    } else if (userChoice === computerChoice) 
      {
        // alert("It's a tie!");
        console.log("It's a tie")
    } 
}

function game() {
    for (let i = 0; i < 5; i++) {
        userChoice = "Hello";
        // userChoice = prompt("'Rock', 'Paper' or 'Scissors'?").toUpperCase();
        computerChoice = getComputerChoice();   
        playRound(userChoice, computerChoice)
    } if (userScore > computerScore) {
        // alert(`Computer: ${computerScore}. You: ${userScore}. YOU WIN!`);
    } else if (userScore < computerScore) {
        // alert(`Computer: ${computerScore}. You: ${userScore}. YOU LOSE!`);
    } else if (userScore === computerScore) {
        // alert(`Computer: ${computerScore}. You: ${userScore}. IT'S A TIE!`);
    }
}

const rockBtn = document.querySelector(".rock-btn");
rockBtn.addEventListener("click", () => {
    playRound(userChoice = "ROCK", computerChoice);
    console.log(userChoice);
});

const paperBtn = document.querySelector(".paper-btn");
paperBtn.addEventListener("click", () => {
    playRound(userChoice = "PAPER", computerChoice);
    console.log(userChoice)
})

const scissorsBtn = document.querySelector(".scissors-btn");
scissorsBtn.addEventListener("click", () => {
    playRound(userChoice = "SCISSORS", computerChoice);
    console.log(userChoice)
})

let userScore = 0;
let computerScore = 0;
game()