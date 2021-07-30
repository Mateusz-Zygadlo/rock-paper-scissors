const buttons = document.querySelectorAll('#btn');

for(const button of buttons){
    button.addEventListener('click', () => {
        console.log(this.value);
    })
}