const choice = ['rock', 'paper', 'scissors'];

function computerChoice(){
    function mathRandom(parametr){
        return Math.floor(Math.random()*parametr.length);
    }
    function computerPlay(item){
        return item[mathRandom(choice)];
    }
    return computerPlay(choice);
}
console.log(computerChoice());