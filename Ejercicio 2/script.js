const menu = document.querySelector('.menu');

let lineTop = document.querySelector('.line1');
let lineCenter = document.querySelector('.line2');
let lineButtom = document.querySelector('.line3');


menu.addEventListener('click',() =>{
    lineTop.classList.toggle('top');
    lineCenter.classList.toggle('centro');
    lineButtom.classList.toggle('buttom');
})