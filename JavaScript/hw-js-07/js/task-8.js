const input = document.querySelector('input[type="number"]');
const renderBtn = document.querySelector('button[data-action="render"]');
const destroyBtn = document.querySelector('button[data-action="destroy"]');
const boxes = document.querySelector("#boxes");

const changeColor = () => {
    return `rgb(${Math.floor(Math.random() * 250)},
                ${Math.floor(Math.random() * 250)},
                ${Math.floor(Math.random() * 250)})`;
};

const createBoxes = amount => {
    amount = input.value;
    let width = 30;
    let height = 30;
    const colection = []
    for (let i = 0; i < amount; i++) {
        const div = document.createElement("div");
        div.style.backgroundColor = changeColor();
        div.style.width = width + "px";
        div.style.height = height + "px";
        colection.push(div)
        width += 10;
        height += 10;
    }
    boxes.append(...colection);
    input.value = null;
};
const destroyBoxes = () => {
    boxes.innerHTML = "";
    input.value = null;
};
renderBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);