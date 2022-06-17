const counter = document.getElementById('counter');
var count = 0;
const buttons = document.querySelectorAll('.btn');

function change() {
    alert('Just click buttons to see changes :)');
}
window.onload = change;

buttons.forEach((button) => {
    button.addEventListener('click',function(){
        if(button.classList.contains('increase')){
            count++;
            counter.textContent = count;
        }
        else if(button.classList.contains('decrease')){
            count--;
            counter.textContent = count;
        }
        else{
        count = 0;
        counter.textContent = count;
        }
        if(count>0){
            counter.style.color = 'green';
        }
        else if(count<0){
            counter.style.color = 'red';
        }
        else{
            counter.style.color = 'black';
        }
    })
}
);
