function getComputerChoice() {
    let pc = (Math.round(Math.random() * 100));
    if (pc >= 0 && pc <= 32) {
        pc = 'Rock';
    } else if (pc >= 33 && pc <= 66) {
        pc = 'Paper';
    } else {
        pc = 'Scissors';
    }
    console.log(`PC choice: ${pc}`);
    return pc;
}

function getHumanChoice() {
    let faq = prompt('Rock, Paper, Scissors?', '');
    let answer = faq.charAt(0).toUpperCase() + faq.slice(1).toLowerCase();
    console.log(`Your choice: ${answer}`);
    return answer;
}

function playRound(computerChoice, humanChoice) {

    if (computerChoice === 'Rock' && humanChoice === 'Scissors') {
        console.log(`You lose! Rock win Scissors!`)
        return computerScore++;
    }
    if (computerChoice === 'Paper' && humanChoice === 'Rock') {
        console.log(`You lose! Paper win Rock!`)
        return computerScore++;
    }
    if (computerChoice === 'Scissors' && humanChoice === 'Paper') {
        console.log(`You lose! Scissors win Paper!`)
        return computerScore++;
    }

    if (computerChoice === 'Rock' && humanChoice === 'Paper') {
        console.log(`You won! Paper win Rock!`)
        return humanScore++;
    }
    if (computerChoice === 'Paper' && humanChoice === 'Scissors') {
        console.log(`You won! Scissors win Paper!`)
        return humanScore++;
    }
    if (computerChoice === 'Scissors' && humanChoice === 'Rock') {
        console.log(`You won! Rock win Scissors!`)
        return humanScore++;
    }
        
    if (computerChoice === 'Rock' && humanChoice === 'Rock') {
        console.log(`Draw`)
    }
    if (computerChoice === 'Paper' && humanChoice === 'Paper') {
        console.log(`Draw`)
    }
    if (computerChoice === 'Scissors' && humanChoice === 'Scissors') {
        console.log(`Draw`)
    }
}

function playGame () {

    let computerSelection = getComputerChoice();
    let humanSelection = getHumanChoice();

    playRound(computerSelection, humanSelection);
    console.log(`PC total: ${computerScore}`);
    console.log(`Your total: ${humanScore}`);
    console.log('');
}

function game () {
    for (let i = gameRounds; i > 0; i--) {
        console.log('Round:' + ' ' + roundNumber++);
        playGame();
    }

    if ( humanScore > computerScore) {
        console.log('You Win!');
    } else if (humanScore < computerScore) {
        console.log('You Lose!');
    } else {
        console.log('Draw!');
    }

    console.log(`PC total: ${computerScore}, Your total: ${humanScore}`);
}


let humanScore = 0;
let computerScore = 0;

let gameRounds = 5;
let roundNumber = 1;

game();