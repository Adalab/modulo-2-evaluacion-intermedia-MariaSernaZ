'use strict'

const button = document.querySelector('.js-button');
const inputNumber = document.querySelector('.js-num');
const inputNumValue = inputNumber.value;
const clueElement = document.querySelector('.js-clue');
const clueContent = clueElement.innerHTML; 
const inputCounter = document.querySelector('.js-counter');
const inputCountValue = inputCounter.value;


//genera comprobación juego
function guessNumber() {
    const toNum = parseInt(inputNumValue);
    console.log(toNum);
    if (toNum === getRandomNumber) {
      clueContent = 'Has ganado campeona!';
    } else if (toNum > getRandomNumber) {
      clueContent = 'Demasiado alto.';
    } else if (toNum < getRandomNumber) {
      clueContent = 'Demasiado bajo.';
    } else if (toNum < 1 || guessNumber > 100) {
      clueContent = 'El número debe estar entre 1 y 100.';
    }
}

//genera nº aleatorio
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
    }

console.log(`EL número aleatorio es ${getRandomNumber(100)}`);

// función contador
let attempts = 0;

function countAttempts() {
    attempts = attempts + 1;
    return inputCountValue = `Número de intentos: ${countAttempts()}`;
}



button.addEventListener('click', guessNumber);
button.addEventListener('click', countAttempts);