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
    let score; // [player,computer]
    // check if tie
    if(playerSelection === computerSelection) score = [0,0];
    // if player rock
    else if(playerSelection == 'Rock'){
        if(computerSelection == 'Paper')score = [0,1];
        else score = [1,0];  
    }
    // if player paper
    else if(playerSelection == 'Paper'){
        if(computerSelection == 'Scissors') score = [0,1];
        else score = [1,0];
    }
    // if player scissors (only other option)
    else {
        if(computerSelection == 'Rock') score = [0,1];
        else score = [1,0];
    }
    return score;
}

function getPlayerInput(){
    const options = ["Rock", "Paper", "Scissors"];
    // input through prompt
    let playerInput = window.prompt("Rock, paper, scissors? Enter q to quit.");
    if(!playerInput){
        console.log('Thank you for playing.');
        return 'quit'
    }
    // make case insensitive
    playerInput = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase();
    // check if the player wants to quit (entered q)
    if(playerInput === 'Q' ){
        console.log('Thank you for playing.');
        return 'quit'
    }
    // check if input is valid options (Rock, Paper, Scissors)
    else if(!options.includes(playerInput)){
        console.log('No valid input, please try again');
        return null;
    }
    else{return playerInput; 
    }  
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    // loop until 5 games are won by someone
    while (playerScore + computerScore < 5){
        // get player input
        const playerSelection = getPlayerInput();
        if(!playerSelection) continue;
        if(playerSelection == 'quit') break;
        // determine computer selection
        const computerSelection = computerPlay();
        // play round
        const result = playRound(playerSelection,computerSelection);
        // give feedback for round
        if(result[0] === 1) console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
        else{
            if(result[1] === 0) console.log(`Tie breaker on ${playerSelection}`);
            else console.log(`You lose! ${computerSelection} beats ${playerSelection}!`);
        }
        // update score
        playerScore += result[0];
        computerScore += result[1];
        console.log(`You: ${playerScore}\nComputer: ${computerScore}`);
    }
    // announce winner at end
    if(playerScore + computerScore  < 5){
    } else if(playerScore > computerScore){
        console.log(`You won! ${playerScore} - ${computerScore}`);
    } else {console.log(`You lost! ${playerScore} - ${computerScore}`);
    }
}