/*

let colorinput = document.querySelector('#color');
let hexinput = document.querySelector('#hex');

colorinput.addEventListener('input',()=> {
    let color = colorinput.value;
    hexinput.value = color;
    document.body.style.backgroundColor = color;

    // document.querySelector('h1').style.color = color;
})

*/


/*

const zoom = document.getElementById('color')

const changeColor = e => 
  document.documentElement.style.setProperty('--color', e.target.value)


zoom.addEventListener('change', e => changeColor(e))
zoom.addEventListener('mousemove', e => changeColor(e)) */



var colorchange;
var initialColor = '#ffffff';

window.addEventListener("load",changeColor);

function changeColor() {
    colorchange = document.querySelector("#colorchange");
    colorchange.value = initialColor;
    colorchange.addEventListener("input",update)
}

function update(event) {
    document.body.style.backgroundColor = event.target.value;
    document.getElementById('hexvalue').innerHTML = event.target.value;
} 