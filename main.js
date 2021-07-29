const game = ['rock', 'paper', 'scissors'];

function playRound(){

    function mathRandom(parametr){
        return Math.floor(Math.random()*parametr.length);
    }  

    function computerPlay(item){
        return item[mathRandom(game)];
    }

    const playerPlays = 'paper';
    
    const computerPlays = computerPlay(game);

    function add(playerSelection, computerSelection){
        return computerSelection.concat(playerSelection);
    }

    function findWin(item5){

        switch(item5){
            case 'scissorspaper':
            case 'rockscissprs':
            case 'paperrock':
                return `Computer play and win\n`;
                break;
            case 'scissorsrock':
            case 'rockpaper':
            case 'paperscissors':
                return `Player play and win\n`;
                break;
            case 'paperpaper':
            case 'rockrock':
            case 'scissorsscissors':
                return `Computer and player and not wins\n`;
                break;
        }
    }
    for(let i = 0; i < 15; i++){
        console.log(findWin(add(playerPlays, computerPlays)), add(playerPlays, computerPlays));
    }
}
playRound();