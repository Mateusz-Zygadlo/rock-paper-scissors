const game = ['rock', 'paper', 'scissors'];
let playerChoice;

const buttons = document.querySelectorAll('.button');
let noeexsist = document.querySelector('.noeexsist');

function computerPlay(){
    function mathRandom(parametr){
        return Math.floor(Math.random()*parametr.length);
    }
    function computerPlay(item){
        return item[mathRandom(game)];
    }
    return computerPlay(game);
}
let playerPlay123 = document.querySelector('.playerPlay123');

let userChoice;

buttons.forEach( (buttons) => {
    buttons.addEventListener('click', (e) => {
        userChoice = e.target.value;
        playerPlay123.textContent = userChoice;
        end();
    })
})
const playerPlays =  userChoice;

let computerCount = 0;
let playerCount = 0;
let drawCount = 0;


function playRound() {

    const computerPlays2 = document.querySelector('.computerPlays');

    const playerPlays15 = userChoice;

    const computerPlays = computerPlay(game);

    let computerPlay123 = document.querySelector('.computerPlay123').textContent = `${computerPlays}`;

    let result = computerPlays.concat(playerPlays15);

    switch(result){
        case 'scissorspaper':
        case 'rockscissprs':
        case 'paperrock':
            computerCount++;
            return computerPlays2.textContent = `Computer play ${computerPlays} and win with player play ${playerPlays}\n`;
        case 'scissorsrock':
        case 'rockpaper':
        case 'paperscissors':
            playerCount++;
            return computerPlays2.textContent = `Player play ${playerPlays} and win with computer play ${computerPlays}\n`;
        case 'paperpaper':
        case 'rockrock':
        case 'scissorsscissors':
            drawCount++;
            return computerPlays2.textContent = `Computer play ${computerPlays} and player play ${playerPlays} and not wins\n`;
    }
}
function gameOn(){
    for(let i = 0; i < 1; i++){
        console.log(playRound(userChoice));
    }   
}   

function end(){
    gameOn();
    if(computerCount > playerCount){
        return `winner is computer with ${computerCount} counts\n
        player ${playerCount},draw ${drawCount}`;
    }else if(playerCount > computerCount){
        return `winner is player with ${playerCount} counts\n
        computer ${computerCount} draw ${drawCount}`;
    }
}


function clearValue(){
    return computerCount = 0;
}
function clearValue2(){
    return playerCount = 0;
}
function clearValue3(){
    return drawCount = 0;
}
clearValue();
clearValue2();
clearValue3();