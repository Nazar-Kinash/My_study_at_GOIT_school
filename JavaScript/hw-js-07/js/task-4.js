"use strict"

const counterValue = document.querySelector('#value')
const increment = () => {
    ++counterValue.textContent;
}
const decrement = () => {
    --counterValue.textContent;
}
counterValue.previousElementSibling.addEventListener('click', decrement)
counterValue.nextElementSibling.addEventListener('click', increment)