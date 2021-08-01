const choice = ['rock', 'paper', 'scissors'];
let userChoice;

let computerScore = 0;
let playerScore = 0;

let buttons = document.querySelectorAll('.button');

let computerChoice = document.querySelector('.computer');
let playerChoice = document.querySelector('.player');

let computerCount = document.querySelector('.computerCount');
let playerCount = document.querySelector('.playerCount');

let winner = document.querySelector('.winner');

function computerPlay(){
    function mathRandom(parametr){
        return Math.floor(Math.random()*parametr.length);
    }
    return choice[mathRandom(choice)];
}
function playRound() {

    let computer = computerPlay();
    computerChoice.textContent = computer;
    let player = userChoice;

    let result = computer.concat(player);

    switch(result){
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':
            computerScore++;
            computerCount.textContent = computerScore;
            winner.textContent = 'computer win player lose';
            break;
        case 'scissorsrock':
        case 'rockpaper':
        case 'paperscissors':
            playerScore++;
            playerCount.textContent = playerScore;
            winner.textContent = 'player win computer lose';
            break;
        case 'paperpaper':
        case 'rockrock':
        case 'scissorsscissors':
            winner.textContent = 'computer player draw';
            console.log('draw');
            break;
    }

}

buttons.forEach( (buttons) => {
    buttons.addEventListener('click', (e) => {
        userChoice = e.target.value;
        playerChoice.textContent = userChoice;
        playRound();
    })
})