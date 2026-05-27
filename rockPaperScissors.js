// Declerations of var 
let humanScore = 0, computerScore = 0, roundsPlayed = 0;


//Functions 
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        choice = 'rock';
    } else if (choice === 1) {
        choice = 'paper'
    } else {
        choice = 'scissors'
    }

    return choice;
}


function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    const results = document.getElementById('results');
    const p = document.createElement('p');

    if (humanChoice === 'rock' && computerChoice === 'paper') {
        p.textContent = 'You lose! Paper beats Rock.';
        computerScore++;
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        p.textContent = 'You lose! Scissors beats Paper.';
        computerScore++;
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        p.textContent = 'You lose! Rock beats Scissors.';
        computerScore++;
    } else if (humanChoice === computerChoice) {
        p.textContent = 'A Tie! Both chose ' + humanChoice + '.';
    } else {
        p.textContent = 'You Win! ' + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1) + ' beats ' + computerChoice + '.';
        humanScore++;
    }
    results.innerHTML = '';
    results.appendChild(p);
    roundsPlayed++;

    document.getElementById('roundCounter').textContent = 'Round ' + (roundsPlayed) + ' / 5';

    if (roundsPlayed === 5) {
        endGame();
    }
    
}


function endGame() {
    const finalResult = document.getElementById('finalResult');

    if (humanScore > computerScore) {
        finalResult.textContent = 'Game Over! You won the game! ' + humanScore + ' - ' + computerScore;
    } else if (computerScore > humanScore) {
        finalResult.textContent = 'Game Over! You lost the game. ' + humanScore + ' - ' + computerScore;
    } else {
        finalResult.textContent = 'Game Over! It\'s a tie! ' + humanScore + ' - ' + computerScore;
    }

    const victoryImg = document.getElementById('victoryImg');
    const losingImg = document.getElementById('losingImg');
    victoryImg.style.display = 'none';
    losingImg.style.display = 'none';

    if (humanScore > computerScore) {
        victoryImg.style.display = 'block';
    } else if (computerScore > humanScore) {
        losingImg.style.display = 'block';
    }

    // disable buttons after game ends
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;
    document.getElementById('startGame').style.display = 'block';
    document.getElementById('roundCounter').style.display = 'none';
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
    document.getElementById('results').innerHTML = '';
    document.getElementById('finalResult').textContent = '';
    document.getElementById('victoryImg').style.display = 'none';
    document.getElementById('losingImg').style.display = 'none';
    document.getElementById('rock').disabled = false;
    document.getElementById('paper').disabled = false;
    document.getElementById('scissors').disabled = false;
    document.getElementById('startGame').style.display = 'none';
    document.getElementById('roundCounter').style.display = 'block';
}

// Rest
document.getElementById('rock').addEventListener('click', () => playRound('rock'));
document.getElementById('paper').addEventListener('click', () => playRound('paper'));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));
document.getElementById('startGame').addEventListener('click', resetGame);
