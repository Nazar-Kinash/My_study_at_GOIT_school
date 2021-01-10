'use strict';

const input = document.querySelector('#validation-input');

const validator = () => {
    if (input.value.length != input.getAttribute('data-length') && input.value.length) {
        input.classList.remove('valid');
        input.classList.add('invalid');
        return;
    }
    input.classList.remove('invalid');
    input.classList.add('valid');
};
input.addEventListener('blur', validator);