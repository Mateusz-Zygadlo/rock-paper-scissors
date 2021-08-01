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

// 
let startPageButton = document.querySelector('.startPageButton');
let startPage = document.querySelector('.page');

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
            winner.textContent = 'computer win';
            break;
        case 'scissorsrock':
        case 'rockpaper':
        case 'paperscissors':
            playerScore++;
            playerCount.textContent = playerScore;
            winner.textContent = 'you win';
            break;
        case 'paperpaper':
        case 'rockrock':
        case 'scissorsscissors':
            winner.textContent = 'draw';
            break;
    }

}
startPageButton.addEventListener('click', deleteStartPage);

function deleteStartPage(){
    startPage.classList.remove('start');
    startPage.classList.add('deleteStart');
}


buttons.forEach( (buttons) => {
    buttons.addEventListener('click', (e) => {
        userChoice = e.target.value;
        playerChoice.textContent = userChoice;
        playRound();
    })
})