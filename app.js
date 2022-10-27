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
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return 'It\'s a tie!'
    } else if (playerSelection === 'rock' && computerSelection !== 'paper') {
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    } else if (playerSelection === 'paper' && computerSelection !== 'scissors') {
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    } else if (playerSelection === 'scissors' && computerSelection !== 'rock') {
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}!`
    }
}
