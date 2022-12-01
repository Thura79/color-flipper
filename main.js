// import * as bootstrap from 'bootstrap';
import './style.scss';


const colors = ['orange', 'yellow', 'green', 'red', 'blue'];

const click = document.getElementById('click');
const color = document.querySelector('.color');


click.addEventListener('click', function() {
    let randomNumber = Math.floor((Math.random() * colors.length));
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})


