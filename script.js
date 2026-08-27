
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

//function that asks user to write choice and then converts it to corresponding
//number (for example user input rock equals 0)

function getHumanChoice(){
    let humanChoice = prompt("Enter your figure:")
    switch(humanChoice){
        case "rock":
            humanChoice = 0;
            break;
        case "paper":
            humanChoice = 1;
            break;
        case "scisors":
            humanChoice = 2;
            break;
    }
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

// plays a round of a game and increments scores when somebody wons

function playRound (){
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();

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

function playGame(){
    let gameStatus = true;
    while (gameStatus == true){
        let continueGame = prompt("Do you want to play another round?")
            switch(continueGame){
                case "yes":
                    gameStatus = true;
                    break;
                case "no":
                    gameStatus = false;
                    break;
            }
        if(gameStatus == true){
            playRound();
            console.log("Your score = " + humanScore  + ", " + 
                "Computer score = " + computerScore);
        }
        else if(gameStatus == false){
            console.log("End of a game! Your score = " + humanScore  + ", " + 
                "Computer score = " + computerScore);
        }
    }
}

playGame();