"use strict"

const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

const changeSize = () => {
    text.style.fontSize = input.value + "px"
}

input.addEventListener('input', changeSize);