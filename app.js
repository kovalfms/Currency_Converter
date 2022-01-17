const сurrency = {};
console.log(сurrency);

const euro = document.querySelector('[data-value="EUR"]');
const usd = document.querySelector('[data-value="USD"]');
const pln = document.querySelector('[data-value="PLN"]');

const input = document.querySelector('#input');
const select = document.querySelector('#select');
const result = document.querySelector('#result');


async function getCurrentCourse() {
        const  response = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json');
        const result = await response.json();
        const data = result;

        сurrency.EUR = data[32];
        сurrency.USD = data[26];
        сurrency.PLN = data[33];
        getRates();
}

function getRates() {
    euro.textContent = сurrency.EUR.rate.toFixed(2);
    usd.textContent = сurrency.USD.rate.toFixed(2);
    pln.textContent = сurrency.PLN.rate.toFixed(2);
}

function converter() {
    result.value = (input.value / сurrency[select.value].rate).toFixed(2);
}
input.oninput = converter;
select.oninput = converter;

getCurrentCourse();