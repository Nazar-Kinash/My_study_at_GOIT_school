import menuList from './menu.json';
import menuTemplate from './menu.hbs';
import './styles.css';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const body = document.querySelector('body');
const checkbox = document.querySelector('.js-switch-input');
const currentTheme = localStorage.getItem('Theme');
checkbox.addEventListener('change', changeTheme);

if (currentTheme === Theme.DARK) {
  checkbox.checked = true;
  body.classList.add(Theme.DARK);
} else {
  checkbox.checked = false;
  body.classList.add(Theme.LIGHT);
}

function changeTheme() {
  if (checkbox.checked) {
    body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('Theme', Theme.DARK);
  } else {
    body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('Theme', Theme.LIGHT);
  }
}
const menu = document.querySelector('.js-menu');
menu.insertAdjacentHTML('afterbegin', menuTemplate(menuList));
