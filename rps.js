
//function

function game(){
//score system
let playerScore = 0;
let computerScore = 0;

for(let i = 0; i < 5; i++) {
 // if (round === "tie") { continue;}

function random_RPS(rockPaperOrScissors)
{
  
return rockPaperOrScissors[Math.floor(Math.random()*rockPaperOrScissors.length)];
}

let rockPaperOrScissors = ["rock","paper","scissors"];

let playerSelection = prompt("Enter rock, paper or scissors: ")

let computerSelection = random_RPS(rockPaperOrScissors)


//allows user to input in any case
playerSelection = playerSelection.toLowerCase()

let round = playRound(playerSelection, computerSelection)

    if (round === "win") {
      playerScore++;
      console.log("You Win!")
    }
    if (round === "lose") {
      computerScore++;
      console.log("You Lose!")
    }
    if (round === "tie") {
      confirm("You tied. Please try again.");
      playerSelection = prompt("Enter rock, paper or scissors: ")
    }
  }

  if (playerScore > computerScore){
    console.log("Congratulations, you won!")
  }
  else {
    console.log("Sorry, you lost")
  }

function playRound(playerSelection, computerSelection) {

//figuring out who wins/loses
  if (playerSelection == "rock") {
    if (computerSelection == "rock"){
       return "tie"
      }
    else if (computerSelection == "paper"){
      return "lose"
    }
    else 
      return "win"
    }
    

  if (playerSelection == "paper")
    if (computerSelection == "rock") {
      return "win"
    }
    else if (computerSelection == "paper"){
      return "tie"
    }
    else
      return "lose"


  if (playerSelection == "scissors")
    if (computerSelection == "rock") {
      return "lose"
    }
    else if (computerSelection == "paper"){
      return "win"
    }
    else
      return "tie"
    

  //Determining result and calculating points

  }
}
confirm(game());
