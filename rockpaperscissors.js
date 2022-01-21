function computerPlay() {
    // Get a random number 0, 1 or 2
    num = Math.floor(Math.random() * 3);
    // if 0 return rock
    if (num === 0) {
        return "Rock";
    }
    // else if 1 return paper
    else if (num === 1) {
        return "Paper";
    }
    // return scissors
    return "Scissors";
}

function playRound(playerSelection, computerSelection) {
    // make playerselection case insensitive
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    // check if input is valid options (Rock, Paper, Scissors)
    const options = ["Rock", "Paper", "Scissors"]
    if(!options.includes(playerSelection)){
        return "No valid input"
    }
    // messages for tie, victory and loss
    const tie = `Tie breaker on ${playerSelection}`
    const victory = `You win! ${playerSelection} beats ${computerSelection}!`
    const loss = `You lose! ${computerSelection} beats ${playerSelection}!`
    // check if tie
    if(playerSelection === computerSelection){
        return tie;
    }
    // if player rock
    else if(playerSelection == 'Rock'){
        if(computerSelection == 'Paper'){
            return loss;
        }
        return victory;
    }
    // if player paper
    else if(playerSelection == 'Paper'){
        if(computerSelection == 'Scissors'){
            return loss;
        }
        return victory;
    }
    // if player scissors
    else if(playerSelection == 'Scissors'){
        if(computerSelection == 'Rock'){
            return loss;
        }
        return victory;
    }
    
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection,computerSelection));