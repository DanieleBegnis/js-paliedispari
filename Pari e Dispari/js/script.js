//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
const evenOrOddUser = prompt('scegli pari o dispari');
const numberUser = parseInt(prompt('scrivi un numero da 1 a 5'));
console.log(evenOrOddUser, numberUser);
let userNumberEvenOrOdd = isEvenOrOdd(evenOrOddUser);

//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
const randNumber = getRndInteger(1, 5);
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
console.log(randNumber);

//Sommiamo i due numeri

let numSum = sommaNumeri(numberUser, randNumber);
console.log(numSum);

function sommaNumeri(num1, num2) {
    const sum = num1 + num2;
    return sum;
}
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function isEvenOrOdd(numSum) {
    let evenOrOdd;
    
    if(numSum % 2 === 0) {
        evenOrOdd = 'pari';
    } else {
        evenOrOdd = 'dispari';
    }
    return evenOrOdd;
}
//Dichiariamo chi ha vinto.
console.log(userNumberEvenOrOdd)
if(userNumberEvenOrOdd === evenOrOddUser) {
    alert('hai vinto!');
} else {
    alert('hai perso!');
}