"use strict"

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];
const ingredientsList = document.querySelector('#ingredients');

function createIngredientsList(arr) {
    const list = [];
    for (let el of arr) {
        const item = document.createElement('li');
        item.textContent = el;
        list.push(item);
    };
    return list;
}
ingredientsList.append(...createIngredientsList(ingredients));