
//function that generates random number lesser than max

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//function that generates choice of computer
//0 corresponds to rock
//1 corresponds to paper
//2 corresponds to scisors

function getComputerChoice(){
    return getRandomInt(3);
}


let humanScore = 0;
let computerScore = 0;

// plays a round of a game and increments scores when somebody wons

function playRound (humanChoice){
    let computerChoice = getComputerChoice();

    if(humanChoice == computerChoice){
        console.log("Draw")
    }
    else if (humanChoice == 0){
        if(computerChoice == 1)
        {
            console.log("You lose :<");
            computerScore += 1;
        }
        else if(computerChoice == 2){
            console.log("You won :>");
            humanScore += 1;
        }
    }
    else if (humanChoice == 1){
        if(computerChoice == 2)
        {
            console.log("You lose :<");
            computerScore += 1;
        }
        else if(computerChoice == 0){
            console.log("You won :>");
            humanScore += 1;
        }
    }
    else if (humanChoice == 2){
        if(computerChoice == 0)
        {
            console.log("You lose :<");
            computerScore += 1;
        }
        else if(computerChoice == 1){
            console.log("You won :>");
            humanScore += 1;
        }
    }
}

const scoreInfo = document.getElementById("informationContainer")

function showScore()
{
    scoreInfo.innerText =
    "Your score = " + humanScore + " \n" +
    "Computer score = " + computerScore
    ;
}

const inputRock = document.getElementById("playerInputRock");

inputRock.addEventListener("click", function() {
    playRound(0);
    showScore();
})

const inputPaper = document.getElementById("playerInputPaper");

inputPaper.addEventListener("click", function() {
    playRound(1);
    showScore();
})

const inputScisors = document.getElementById("playerInputScisors");

inputScisors.addEventListener("click", function() {
    playRound(2);
    showScore();
})