const display = document.querySelector('#display');

const btn1 = document.querySelector('#num1')
const btn2 = document.querySelector('#num2')
const btn3 = document.querySelector('#num3')
const btn4 = document.querySelector('#num4')
const btn5 = document.querySelector('#num5')
const btn6 = document.querySelector('#num6')
const btn7 = document.querySelector('#num7')
const btn8 = document.querySelector('#num8')
const btn9 = document.querySelector('#num9')
const btn0 = document.querySelector('#num0')
const btnSo = document.querySelector('#soma')
const btnSu = document.querySelector('#sub')
const btnDi = document.querySelector('#divi')
const btnMul = document.querySelector('#multi')
const btnCl = document.querySelector('#clear')
const btnIgual = document.querySelector('#igual')


let contador = '';

btn1.addEventListener('click', function() {
    display.innerText += 1
})

btn2.addEventListener ('click', function() {
   display.innerText += 2;
})

btn3.addEventListener('click', function() {
   display.innerText += 3;
})

btn4.addEventListener('click', function() {
    display.innerText += 4;
})

btn5.addEventListener('click', function() {
    display.innerText += 5;
})

btn6.addEventListener('click', function() {
   display.innerText += 6;
})

btn7.addEventListener('click', function() {
   display.innerText += 7;
})

btn8.addEventListener('click', function() {
    display.innerText += 8;
})

btn9.addEventListener('click', function() {
    display.innerText += 9;
})

btn0.addEventListener('click', function() {
   display.innerText += 0;
})

btnSo.addEventListener('click', function() {
    contador += display.innerText;
    contador += " + ";
    display.innerText = "";
})

btnSu.addEventListener('click', function() {
    contador += calculadora.display.innerText;
    contador += " - ";
    display.innerText = "";
})

btnDi.addEventListener('click', function() {
    contador += display.innerText;
    contador += " / ";
    display.innerText = "";
})

btnMul.addEventListener('click', function() {
    contador += display.innerText;
    contador += " * ";
    display.innerText = "";
})

btnIgual.addEventListener('click', function() {

    contador += display.innerText;

    let resultado = eval(contador);

    display.innerText = resultado;
    
    contador = "";
})

btnCl.addEventListener('click', function() {
    contador = ""
    display.innerText = "";
})
