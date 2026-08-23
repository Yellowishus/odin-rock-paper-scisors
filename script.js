
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

let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();
console.log("HCh = " + humanChoice + ", " + "CCh = " + computerChoice);

