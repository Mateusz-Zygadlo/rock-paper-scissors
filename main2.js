const choice = ['rock', 'paper', 'scissors'];
let userChoice;

const buttons = document.querySelectorAll('.button');
let playerPlay123 = document.querySelector('.playerPlay123');
const computerPlays2 = document.querySelector('.computerPlays');
let winner = document.querySelector('.winner');

let resultCompuer = document.querySelector('.computer');
let resultPlayer = document.querySelector('.player');

//create computerChoice
function computerChoice(){
    function mathRandom(parametr){
        return Math.floor(Math.random()*parametr.length);
    }
    function computerPlay(item){
        return item[mathRandom(choice)];
    }
    return computerPlay(choice);
}

buttons.forEach( (buttons) => {
    buttons.addEventListener('click', (e) => {
        userChoice = e.target.value;
        playerPlay123.textContent = userChoice;
        end();
    })
})
let computerCount = 0;
let playerCount = 0;

function playRound() {

    const playerPlays = userChoice;
    const computerPlays = computerChoice(choice);

    console.log(computerPlays);

    const playerPlays15 = userChoice;
    let computerPlay123 = document.querySelector('.computerPlay123').textContent = `${computerPlays}`;

    let result = computerPlays.concat(playerPlays15);

    switch(result){
        case 'scissorspaper':
        case 'rockscissprs':
        case 'paperrock':
            computerCount++;
            computerPlays2.textContent = `Computer win\n`;
            break;
        case 'scissorsrock':
        case 'rockpaper':
        case 'paperscissors':
            playerCount++;
            computerPlays2.textContent = `player win\n`;
            break;
        case 'paperpaper':
        case 'rockrock':
        case 'scissorsscissors':
            computerPlays2.textContent = `draw\n`;
            break;
    }

}

function gameOn(){
    playRound();
}

function end(){
    gameOn();
}