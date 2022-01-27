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
    const tie = `Tie breaker on ${playerSelection}`;
    const victory = `You win! ${playerSelection} beats ${computerSelection}!`;
    const loss = `You lose! ${computerSelection} beats ${playerSelection}!`;
    // check if tie
    if(playerSelection === computerSelection){
        score = [0,0];
        console.log(tie);
    }
    // if player rock
    else if(playerSelection == 'Rock'){
        if(computerSelection == 'Paper'){
            score = [0,1];
            console.log(loss);
        }
        else {score = [1,0];
            console.log(victory);
        }      
    }
    // if player paper
    else if(playerSelection == 'Paper'){
        if(computerSelection == 'Scissors'){
            score = [0,1];
            console.log(loss);
        }
        else {score = [1,0];
            console.log(victory);
        }
    }
    // if player scissors
    else if(playerSelection == 'Scissors'){
        if(computerSelection == 'Rock'){
            score = [0,1];
            console.log(loss);
        }
        else {score = [1,0];
            console.log(victory);
        }
    }
    return score;
}

function getPlayerInput(){
    const options = ["Rock", "Paper", "Scissors"];
    // input through prompt
    let playerSelection = window.prompt("Rock, paper, scissors? Enter q to quit.");
    if(playerSelection === null){
        console.log('Thank you for playing.');
        return 'quit'
    }
    // make case insensitive
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    // check if the player wants to quit (entered q)
    if(playerSelection === 'Q' ){
        console.log('Thank you for playing.');
        return 'quit'
    }
    // check if input is valid options (Rock, Paper, Scissors)
    else if(!options.includes(playerSelection)){
        console.log('No valid input, please try again');
        return null;
    }
    else{return playerSelection; 
    }  
}

function game(){
    let computerSelection;
    let playerSelection;
    let result = [0, 0];
    let playerScore = 0;
    let computerScore = 0;
    let totalScore = 0;
    let stop = false;
    // loop until 5 games are won by someone
    while (totalScore < 5 && stop == false){
        // get player input
        playerSelection = getPlayerInput();
        if(playerSelection == null){
            continue;
        }
        else if(playerSelection == 'quit'){
            stop = true; 
            break;
        }
        // determine computer selection
        computerSelection = computerPlay();
        // play round
        result = playRound(playerSelection,computerSelection);
        // update score
        playerScore += result[0];
        computerScore += result[1];
        totalScore = playerScore + computerScore;
        console.log(`You: ${playerScore}\nComputer: ${computerScore}`)
    }
    // announce winner at end
    if(totalScore < 5){
    }
    else if(playerScore > computerScore){
        console.log(`You won! ${playerScore} - ${computerScore}`)
    }
    else {console.log(`You lost! ${playerScore} - ${computerScore}`)
    }
}