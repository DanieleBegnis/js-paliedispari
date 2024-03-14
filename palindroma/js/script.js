//Chiedere all’utente di inserire una parola
const userWord = prompt('dimmi una parola');
console.log(userWord)
//Creare una funzione per capire se la parola inserita è palindroma
//inverto la parola
let palindromeWord = reverseWord(userWord);

function reverseWord (word) {
    let revertedWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
        const thisLetter = word[i];
        revertedWord += thisLetter;
    }
    console.log(revertedWord)
    return revertedWord;
}

//controllo se la parola invertita è uguale a quella non invertita
if(palindromeWord === userWord) {
    alert('la parola è palindroma')
}