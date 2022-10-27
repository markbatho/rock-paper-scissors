function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    let computerSelection;
    
    switch (choice) {
        case 0:
            computerSelection = 'rock';
            break;
        case 1:
            computerSelection = 'paper';
            break;
        case 2:
            computerSelection = 'scissors';
            break;
        default:
            computerSelection = 'rock';
    }

    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    let winner;

    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        console.log('It\'s a tie!');
    } else if (playerSelection === 'rock' && computerSelection !== 'paper') {
        winner = 'player';
        console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
    } else if (playerSelection === 'paper' && computerSelection !== 'scissors') {
        winner = 'player';
        console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
    } else if (playerSelection === 'scissors' && computerSelection !== 'rock') {
        winner = 'player';
        console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
    } else {
        winner = 'computer';
        console.log(`You lose! ${computerSelection} beats ${playerSelection}!`);
    }

    return winner;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('What do you play? Rock, Paper or Scissors?');
        let roundWinner = playRound(playerSelection, getComputerChoice());

        if (roundWinner === 'player') {
            playerScore++;
        }

        if (roundWinner === 'computer') {
            computerScore++;
        }
    }

    console.log('Result:');

    if (playerScore > computerScore) {
        console.log('You won the game!');
    } else if (playerScore < computerScore) {
        console.log('You lost the game!');
    } else {
        console.log('It\'s a draw!');
    }
}

game();
