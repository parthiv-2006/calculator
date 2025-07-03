let num1;
let num2;
let operation;

const zeroButton = document.querySelector('#zero')
const oneButton = document.querySelector('#one')
const twoButton = document.querySelector('#two')
const threeButton = document.querySelector('#three')
const fourButton = document.querySelector('#four')
const fiveButton = document.querySelector('#five')
const sixButton = document.querySelector('#six')
const sevenButton = document.querySelector('#seven')
const eightButton = document.querySelector('#eight')
const nineButton = document.querySelector('#nine')
const acButton = document.querySelector('#clearAll')
const delButton = document.querySelector('#delete')
const mulButton = document.querySelector('#multiplication')
const divButton = document.querySelector('#division')
const addButton = document.querySelector('#addition')
const subButton = document.querySelector('#subtraction')
const decimalButton = document.querySelector('#decimal')
const equalButton = document.querySelector('#equals')
const display = document.querySelector('.display')

acButton.addEventListener('click', () => { display.textContent = 0; });


function add(value, operationalValue) {
    return value + operationalValue
}

function subtract(value, operationalValue) {
    return value - operationalValue
}

function multiply(value, operationalValue) {
    return value * operationalValue
}

function divide(value, operationalValue) {
    return value / operationalValue
}

function operate(num1, operation, num2) {
    
}