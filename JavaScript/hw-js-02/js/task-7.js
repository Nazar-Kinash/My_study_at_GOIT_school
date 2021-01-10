const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login) {
  return login.length >= 4 && login.length <= 16;
};

const isLoginUnique = function(allLogins, login) {
  return allLogins.includes(login);
};

const addLogin = function(allLogins, login) {
  if (!isLoginValid(login)) {
    return 'Помилка, логін повинен бути від 4 до 16 симводшв!';
  }
  if (!isLoginUnique(allLogins, login)) {
    return 'Такий логін уже використовується!';
  }
  logins.push(login);

  return 'Логін успішно додано!';
};

console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
