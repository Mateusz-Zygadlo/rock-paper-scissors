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
let winnerType = document.querySelector('.winnerType');

let computerWin = 'Computer win';
let playerWin = 'Player win';
// 
let startPageButton = document.querySelector('.startPageButton');
let startPage = document.querySelector('.page');
let endPage = document.querySelector('.endPage');
let endPageButton = document.querySelector('.endPageButton');

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
            winner.textContent = 'Computer win';
            break;
        case 'scissorsrock':
        case 'rockpaper':
        case 'paperscissors':
            playerScore++;
            playerCount.textContent = playerScore;
            winner.textContent = 'You win';
            break;
        case 'paperpaper':
        case 'rockrock':
        case 'scissorsscissors':
            winner.textContent = 'Draw';
            break;
    }
    if(computerScore == 5){
        winPage(computerWin)
    }
    if(playerScore == 5){
        winPage(playerWin);
    }

}

startPageButton.addEventListener('click', deleteStartPage);
endPageButton.addEventListener('click', reload);

function reload(){
    location.reload();
}

function deleteStartPage(){
    startPage.classList.remove('start');
    startPage.classList.add('deleteStart');
}
function winPage(winnerArgs){
    endPageButton.textContent = 'reload page';
    winnerType.textContent = winnerArgs;
    endPage.classList.add('winPage');
}

buttons.forEach( (buttons) => {
    buttons.addEventListener('click', (e) => {
        userChoice = e.target.value;
        playerChoice.textContent = userChoice;
        playRound();
    })
})