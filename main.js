const game = ['rock', 'paper', 'scissors'];

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

    const computerPlays = computerPlay(game);
    const playerPlays = 'paper';

    let result = computerPlays.concat(playerPlays);

    switch(result){
        case 'scissorspaper':
        case 'rockscissprs':
        case 'paperrock':
            computerCount++;
            return `Computer play ${computerPlays} and win with player play ${playerPlays}\n`;
        case 'scissorsrock':
        case 'rockpaper':
        case 'paperscissors':
            playerCount++;
            return `Player play ${playerPlays} and win with computer play ${computerPlays}\n`;
        case 'paperpaper':
        case 'rockrock':
        case 'scissorsscissors':
            drawCount++;
            return `Computer play ${computerPlays} and player play ${playerPlays} and not wins\n`;
    }
}
function gameOn(){
    for(let i = 0; i < 5; i++){
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
console.log(end());

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