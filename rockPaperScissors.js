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
    if (humanChoice === 'rock' && computerChoice === 'paper') {
        console.log('You lose! Paper beats Rock.');
        return 0;
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        console.log('You lose! Scissors beats Paper.');
        return 0;
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        console.log('You lose! Rock beats Scissors.');
        return 0;
    } else if (humanChoice === computerChoice) {
        console.log('A Tie! Both get half a point.');
        return 0.5;
    } else {
        console.log('You Win! Well done!');
        return 1;
    }
}

function playGame(humanScore, computerScore) {
    for (let i = 0; i < 5; i++) {
        let score = playRound(getHumanChoice(), getComputerChoice());
        if (score === 1) {
            humanScore++;
        } else if (score === 0) {
            computerScore++;
        } else {
            humanScore += 0.5;
            computerScore += 0.5;
        }
    }
    return { humanScore, computerScore };
}

// Rest
let finalScore = playGame(humanScore, computerScore);
console.log('Final Score: Human ' + finalScore.humanScore + ' - Computer ' + finalScore.computerScore);