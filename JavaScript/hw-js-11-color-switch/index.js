const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];

const body = document.querySelector("body");
const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');

let isActive = false;
let intervalId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const changeColor = () => {
  body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length - 1)];
};
const start = () => {
  if (isActive) {
    return;
  }
  intervalId = setInterval(changeColor, 1000);
  isActive = true;
};
const stop = () => {
  clearInterval(intervalId);
  isActive = false;
};

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
