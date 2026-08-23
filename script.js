
//function that generates random number lesser than max

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//function that generates choice of computer
//0 corresponds to rock
//1 corresponds to paper
//2 corresponds to scisors

function getComputerChoice(){
    return getRandomInt(3)
}

let computerChoice = getComputerChoice();

