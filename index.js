
//console.log("Hello World");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const choice = Math.floor(Math.random() * 3);
    if (choice === 0){
        return "rock";
    }   
    else if (choice === 1){
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice(){
    const choice = prompt("Enter your choice (rock, paper, scissors):").toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissors"){
        console.log(choice);
        return choice;
    }
}

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        console.log("It's a tie!");
        return "It's a tie!";
    }
    else if ((humanChoice === "rock" && computerChoice === "scissors") ||
             (humanChoice === "paper" && computerChoice === "rock") ||
             (humanChoice === "scissors" && computerChoice === "paper")){
        humanScore++;
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        return "You win! " + humanChoice + " beats " + computerChoice;
    }
    else {
        computerScore++;
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        return "You lose! " + computerChoice + " beats " + humanChoice;
    }
}



const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log(playRound(humanSelection, computerSelection));
console.log("Human Score: " + humanScore);
console.log("Computer Score: " + computerScore);
