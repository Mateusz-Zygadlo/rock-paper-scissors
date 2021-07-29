function playRound(){

    const game = ['rock', 'paper', 'scissors'];

    function mathRandom(parametr){
        return Math.floor(Math.random()*parametr.length);
    }
    function computerPlay(item){
        return item[mathRandom(game)];
    }
    
    const playerPlays = 'paper';
    
    const computerPlays = computerPlay(game);
    
    function add(){
        return computerPlays.concat(playerPlays);
    }

    const result = add();
    
    function findWin(){

        switch(result){
            case 'scissorspaper':
            case 'rockscissprs':
            case 'paperrock':
                return `Computer play ${computerPlays} and win with player play ${playerPlays}\n`;
                break;
            case 'scissorsrock':
            case 'rockpaper':
            case 'paperscissors':
                return `Player play ${playerPlays} and win with computer play ${computerPlays}\n`;
                break;
            case 'paperpaper':
            case 'rockrock':
            case 'scissorsscissors':
                return `Computer play ${computerPlays} and player play ${playerPlays} and not wins\n`;
                break;
        }
    }
    return findWin();
}
for(let i = 0; i < 15; i++){
    console.log(playRound());
}