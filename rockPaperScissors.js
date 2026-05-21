// Declerations of var 
let humanScore = 0, computerScore = 0;


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
    console.log('Computer choose ' + choice + '.');
    return choice;
}

function getHumanChoice() {
    while (true) {
        const choice = prompt('Rock, Paper, Scissors?').toLowerCase();

        if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
            console.log('You choose ' + choice + '.');
            return choice;
        } else {
            alert('Invalid choice! Please enter rock, paper or scissors.');
        }
    }
}

function playRound(humanChoice, computerChoice) {
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
        humanScore += 0.5;
        computerScore += 0.5;
    } else {
        p.textContent = 'You Win! ' + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1) + ' beats ' + computerChoice + '.';
        humanScore++;
    }
    results.appendChild(p);
}

function playGame() {
    humanScore = 0;
    computerScore = 0;
    document.getElementById('results').innerHTML = '';
    document.getElementById('finalResult').textContent = '';

    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

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
}

// Rest
document.getElementById('startGame').addEventListener('click', playGame);
