const selectionButtons = document.querySelectorAll('.selection');
const result = document.querySelector('.result');
const playerScoreNode = document.querySelector('#playerScore');
const computerScoreNode = document.querySelector('#computerScore');

let playerScore = 0;
let computerScore = 0;

selectionButtons.forEach(btn => {
    btn.addEventListener('click', function (e) {
        const playerSelection = this.getAttribute('id');
        const round = playRound(playerSelection, getComputerChoice());

        switch (round) {
            case 'player':
                playerScoreNode.textContent = ++playerScore;
                break;
            case 'computer':
                computerScoreNode.textContent = ++computerScore;
                break;
            default:
                break;
        }

        if (playerScore === 5) {
            result.textContent = 'You won the game!';
            playerScore = 0;
            playerScoreNode.textContent = 0;
            computerScore = 0;
            computerScoreNode.textContent = 0;
        }
        
        if (computerScore === 5) {
            result.textContent = 'You lost the game!';
            playerScore = 0;
            playerScoreNode.textContent = 0;
            computerScore = 0;
            computerScoreNode.textContent = 0;
        }
    });
});

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
        result.textContent = 'It\'s a tie!';
    } else if (playerSelection === 'rock' && computerSelection !== 'paper') {
        winner = 'player';
        result.textContent = `You win! ${playerSelection} beats ${computerSelection}!`;
    } else if (playerSelection === 'paper' && computerSelection !== 'scissors') {
        winner = 'player';
        result.textContent = `You win! ${playerSelection} beats ${computerSelection}!`;
    } else if (playerSelection === 'scissors' && computerSelection !== 'rock') {
        winner = 'player';
        result.textContent = `You win! ${playerSelection} beats ${computerSelection}!`;
    } else {
        winner = 'computer';
        result.textContent = `You lose! ${computerSelection} beats ${playerSelection}!`;
    }

    return winner;
}
