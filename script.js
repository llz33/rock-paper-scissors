function getComputerChoice(min, max){
    const maxFloor = Math.floor(max);
    const minCeil = Math.ceil(min);
    let number = Math.floor(Math.random() * (maxFloor - minCeil + 1) + minCeil);
    if (number === 1) {
        console.log("rock");
        return "rock";
    }
    else if (number === 2){
        console.log("paper");
        return "paper";
    }
    else {
        console.log("scissors");
        return "scissors" ;
    }
}


let getUserChoice = prompt("Rock, Paper, Scissors?").toLowerCase();

console.log(getUserChoice);

let humanScore = 0;
let computerScore = 0;

console.log(humanScore, computerScore)

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors") {
         console.log("Human Wins!")
        return humanScore++;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("Computer Wins!")
        return computerScore++;
    } else if (humanChoice ==="paper" && computerChoice === "rock") {
         console.log("Human Wins!")
        return humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("Computer Wins!")
        return computerScore++;
    }  else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("Human Wins!")
        return humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("Computer Wins!")
        return computerScore++;
    } else if (humanChoice === computerChoice){
        console.log("Its a Tie")
        return "Its a Tie"
    }
}

const humanChoice = getUserChoice;
const computerChoice = getComputerChoice(1, 3);

playRound(humanChoice, computerChoice);

console.log(humanScore, computerScore);
console.log(typeof(computerChoice));
console.log(typeof(humanChoice));