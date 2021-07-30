const buttons = document.querySelectorAll('.button');
let noeexsist = document.querySelector('.noeexsist');

let test = ' '; 
 
function playerPlay(){

    buttons.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            
            noeexsist.textContent = e.target.value;
            test = noeexsist.value;
        })
    })
}
function test2(){
    console.log(test);
}
playerPlay();
test2();