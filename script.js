let humanScore = 0;
let computerScore = 0;
let roundCount = 1;
let roundDisplayInitial = "Round: " + roundCount + "------------------";
console.log(roundDisplayInitial);

function playGame (){

    function getComputerChoice(min, max){
        const maxFloor = Math.floor(max);
        const minCeil = Math.ceil(min);
        let number = Math.floor(Math.random() * (maxFloor - minCeil + 1) + minCeil);
        if (number === 1) {
            console.log("Computer: rock");
            return "rock";
        }
        else if (number === 2){
            console.log("Computer: paper");
            return "paper";
        }
        else {
            console.log("Computer: scissors");
            return "scissors" ;
        }
    }


    let getUserChoice = prompt("Rock, Paper, Scissors?").toLowerCase();

    console.log("Human: " + getUserChoice);

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

    console.log("Human: " + humanScore, "Computer: " + computerScore);

    roundCount++;
    let roundDisplay = "Round: " + roundCount + "------------------";
    console.log(roundDisplay);
}  
playGame(playGame(playGame(playGame(playGame()))))

function winner(roundCount, humanScore, computerScore){
    if (roundCount > 5 && humanScore > computerScore) {
        console.log("HUMAN WINS!!!");
        } else if (roundCount > 5 && humanScore < computerScore){
            return console.log("COMPUTER WINS :(");
        } else if (roundCount > 5 && humanScore === computerScore){
            return console.log("Its a tie...")
        }   
    } 
winner(roundCount, humanScore, computerScore);





