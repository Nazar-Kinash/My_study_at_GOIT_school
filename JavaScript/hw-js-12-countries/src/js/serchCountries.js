import PNotify from 'pnotify/dist/es/PNotify';
import fetchCountries from '../js/fetchCountries';
import debounce from 'lodash.debounce';
import coentryListTtmplate from '../templates/country-list.hbs';
import coentryInfoTtmplate from '../templates/country-info.hbs';

const searchQueryInput = document.querySelector('.search-query-input');
const list = document.querySelector('.countries-list');
const info = document.querySelector('.country-conainer');

searchQueryInput.addEventListener('input', debounce(sendRequest, 500));

function clear() {
  list.innerHTML = '';
  info.innerHTML = '';
}

function renderCountryInfo(country) {
  info.innerHTML = '';
  info.insertAdjacentHTML('afterbegin', coentryInfoTtmplate(country));
}

function renderCountrylist(countries) {
  list.insertAdjacentHTML('afterbegin', coentryListTtmplate(countries));
  addEventListener('click', e => {
    for (const obj of countries) {
      if (obj.name === e.target.textContent) {
        renderCountryInfo(obj);
      }
    }
  });
}

function render(arrCountries) {
  if (arrCountries.length >= 2 && arrCountries.length <= 10) {
    renderCountrylist(arrCountries);
    return;
  }
  if (arrCountries.length === 1) {
    renderCountryInfo(...arrCountries);
    return;
  }
  if (arrCountries.length > 10) {
    PNotify.error({
      text: 'Too many matches found. Please enter a more specific query',
      delay: 1000,
    });
    return;
  }
  PNotify.error({
    text: 'Something wrong, try again!',
    delay: 1000,
  });

}

function sendRequest(e) {
  clear();
  if (e.target.value) {
    fetchCountries(e.target.value)
      .then(data => render(data))
      .catch(error => console.log(error));
  }

}
