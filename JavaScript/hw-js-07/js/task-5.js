"use strict"

const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');
const addName = () => {
    outputName.textContent = inputName.value;
    if (inputName.value === "") {
        outputName.textContent = 'незнакомец';
    }
};
inputName.addEventListener('input', addName);