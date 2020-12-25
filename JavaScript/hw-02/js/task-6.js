let input;
const numbers = [];
let total = 0;
do {
  input = prompt('Введіть число!');
  if (Number.isNaN(Number(input))) {
    alert('Некоректні дані, введіть число!');
  } else if (input != null) {
    numbers.push(Number(input));
  }
} while (input != null);
if (numbers.length) {
  for (const number of numbers) {
    total += number;
  }
  console.log(`Загальна сума чисел дорівнює: ${total}`);
} else {
  console.log('Не введено жодного числа!!!');
}
