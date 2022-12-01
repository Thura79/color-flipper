import './style.scss';


const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const click = document.getElementById('click');
const color = document.querySelector('.color');


click.addEventListener('click', function() {
    let hexcolor = '#';
    for(let i = 0; i < 6; i++) {
        hexcolor += hex[gentrandomNumber()];
    }
    console.log(gentrandomNumber())

    color.textContent = hexcolor;
    document.body.style.backgroundColor = hexcolor;
})


function gentrandomNumber() {
    return Math.floor(Math.random() * hex.length);
}
