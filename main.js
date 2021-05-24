'use strict'

const button = document.querySelector('.js-button');
const inputNumber = document.querySelector('.js-num');
const clueElement = document.querySelector('.js-clue');
const pCounter = document.querySelector('.js-counter');

//Nota: es aconsejable que seleccionemos el contenido del elemento .innerHTML o .value dentro de la función en que lo vayamos a utilizar


//genera nº aleatorio
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber(100); //tenemos que llamar a la función para que genere el nº
//console.log(getRandomNumber(100));
console.log(`EL número aleatorio es ${randomNumber}`);


//genera comprobación juego
function guessNumber() {
    const toNum = parseInt(inputNumber.value); //utilizamos este valor y lo pintamos en la consola dentro de esta función porque es la encargada de realizar la validación del input. Si la pusiéramos fuera, nos daría un valor vacío
    console.log(toNum, randomNumber); 


    if (toNum < 1 || toNum > 100) {
        clueElement.innerHTML = 'Pista: El número debe estar entre 1 y 100';
    } 
    else if (toNum > randomNumber) {
        clueElement.innerHTML = 'Pista: Demasiado alto';
    } 
    else if (toNum < randomNumber) {
        clueElement.innerHTML = 'Pista: Demasiado bajo';
    }
    else if (toNum === randomNumber) {
        clueElement.innerHTML = '¡Has ganado campeona!';
    } 
}


//función contador
let attempts = 0; //lo definimos con "let" porque será un valor cambiante. Definimos el valor inicial del contador en 0

function countAttempts() {
    attempts = attempts+1; // equivale a attempts++
    pCounter.innerHTML = `Número de intentos: ${attempts}`; 
}


function handleClick() {
    //comprobación juego
    guessNumber();

    //función contador
    countAttempts();
}

button.addEventListener('click', handleClick);