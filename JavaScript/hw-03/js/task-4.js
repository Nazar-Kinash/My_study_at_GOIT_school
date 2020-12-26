"Use strict";
const countTotalSalary = function(employees) {
  let totalSalary = 0;

  for (let el of Object.values(employees)) {
    totalSalary = totalSalary + el;
  }
  return `Total salary: ${totalSalary}`;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80
  })
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150
  })
); // 400
