let num1;
let operator;
let num2;
let operatorValues = ['+', '-', 'x', '/']

const buttonContainer = document.querySelector('.buttons-container');
const screen = document.querySelector('input');

screen.value = 0;

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    return num1 / num2;
}

// calls different operator functions based on user input
function operate(num1, num2, operator){
    if (operator === '+'){
        return add(num1, num2);
    } else if (operator === '-') {
        return subtract(num1,num2);
    } else if (operator === 'x') {
        return multiply(num1,num2);
    } else if (operator === '/') {
        return division(num1,num2);
    }
}

// captures user clicks on calculator
buttonContainer.addEventListener(('click'), (e) => {
    if (e.target.textContent.length > 1){
        return;
    }
    let buttonPressed = e.target.textContent;
    console.log(buttonPressed);
    manageUserInput(buttonPressed)
})

function manageUserInput(buttonPressed) {
    if (typeof num1 === 'undefined' && Number.isInteger(+buttonPressed)) {
        screen.value = buttonPressed;
    }
}