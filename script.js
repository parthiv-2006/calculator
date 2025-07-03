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

acButton.addEventListener('click', () => { display.textContent = '0'; });
oneButton.addEventListener('click', () => appendNumber('1'));
twoButton.addEventListener('click', () => appendNumber('2'));
threeButton.addEventListener('click', () => appendNumber('3'));
fourButton.addEventListener('click', () => appendNumber('4'));
fiveButton.addEventListener('click', () => appendNumber('5'));
sixButton.addEventListener('click', () => appendNumber('6'));
sevenButton.addEventListener('click', () => appendNumber('7'));
eightButton.addEventListener('click', () => appendNumber('8'));
nineButton.addEventListener('click', () => appendNumber('9'));
zeroButton.addEventListener('click', () => appendNumber('0'));

display.textContent = '0'

function appendNumber (number) {
    if (display.textContent === '0') {
        display.textContent = number
    }
    else {
        if (display.textContent.length < 10){
            display.textContent += number}
    }
}


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