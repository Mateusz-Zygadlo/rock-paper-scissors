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

let computerCount = 0;
let playerCount = 0;
let drawCount = 0;


function playRound() {
    let test;

    function playerPlay15(){
        buttons.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                return test = e.target.value;    
            })
        })
    }

    const playerPlays = playerPlay15();

    const computerPlays2 = document.querySelector('.computerPlays');

    const computerPlays = computerPlay(game);

    let computerPlay123 = document.querySelector('.computerPlay123').textContent = `${computerPlays}`;
    let playerPlay123 = document.querySelector('.playerPlay123').textContent = `${playerPlays}`;

    let result = computerPlays.concat(playerPlays);

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
        console.log(playRound());
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

buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        gameOn();
    })
})

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