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
decimalButton.addEventListener('click', () => 
    {if (!display.textContent.includes('.')) 
        {appendNumber('.')}});

display.textContent = '0'


let num1 = ''
let operator = null
let num2 = ''

equalButton.addEventListener('click', () => evaluate())
acButton.addEventListener('click', () => clear())
delButton.addEventListener('click', () => {
    if (display.textContent.length === 1) {
        display.textContent = '0'
    }
    else {
        display.textContent = display.textContent.slice(0,-1)}
})

addButton.addEventListener('click', () => {
    setOperation('add')
    resetScreen()})
subButton.addEventListener('click', () => {setOperation('subtract') 
    resetScreen()})
mulButton.addEventListener('click', () => {setOperation('multiply')
    resetScreen()
})
divButton.addEventListener('click', () => {setOperation('divide')
    resetScreen()
})

function clear() {
    operator = null
    num1 = ''
    num2 = ''
    display.textContent = '0'
}

function resetScreen() {
    display.textContent = ''
}

function setOperation (operation) {
    if (operation !== null) {
        evaluate()
    }
    num1 = display.textContent
    operator = operation
}

function evaluate() {
    if (operator === null) {return}

    else if (operator === 'divide' && parseFloat(display.textContent) === 0.0) {
        alert("You cannot divide by Zero")
        clear()
        return
    }
    num2 = display.textContent
    display.textContent = Math.round((operate(num1, operator, num2)) * 10000) / 10000
    operator = null
}

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
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)
    if (operation === 'add') {
        return add(num1, num2)
    }
    else if (operation === 'subtract') {
        return subtract(num1, num2)
    }
    else if (operation === 'multiply') {
        return multiply(num1, num2)
    }
    else if (operation === 'divide') {
        return divide(num1, num2)
    }
}