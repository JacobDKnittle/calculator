let num1;
let operator;
let num2;

const buttonContainer = document.querySelector('.buttons-container');

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

function operate(num1, num2, operator){
    if (operator === '+'){
        return add(num1, num2);
    } else if (operator === '-') {
        return subtract(num1,num2);
    } else if (operator === '*') {
        return multiply(num1,num2);
    } else if (operator === '/') {
        return division(num1,num2);
    }
}

buttonContainer.addEventListener(('click'), (e) => {
    if (e.target.textContent.length > 1){
        return;
    }
    let buttonPressed = e.target.textContent;
    
})