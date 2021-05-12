'use strict'

const button = document.querySelector('.js-button');
const inputNumber = document.querySelector('.js-num');
const clueElement = document.querySelector('.js-clue');

const inputCounter = document.querySelector('.js-counter');

//genera nº aleatorio
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
    }

console.log(`EL número aleatorio es ${getRandomNumber(100)}`);

const randomNumber = getRandomNumber(100);


//genera comprobación juego
function guessNumber() {
    const inputNumValue = inputNumber.value;
    const toNum = parseInt(inputNumValue);
    console.log(toNum);


    if (toNum === randomNumber) {
        clueElement.innerHTML = '¡Has ganado campeona!';
    } else if (toNum > randomNumber) {
        clueElement.innerHTML = 'Demasiado alto';
    } else if (toNum < randomNumber) {
        clueElement.innerHTML = 'Demasiado bajo';
    } else if (toNum < 1 || toNum > 100 ) {
        clueElement.innerHTML = 'El número debe estar entre 1 y 100';
    }
}



// función contador
let attempts = 0;

function countAttempts() {
    attempts = attempts + 1;
    let inputCountValue = inputCounter.value;
    inputCountValue = attempts; 
}


button.addEventListener('click', guessNumber);
button.addEventListener('click', countAttempts);