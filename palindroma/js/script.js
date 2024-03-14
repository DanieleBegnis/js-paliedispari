//Chiedere all’utente di inserire una parola
const userWord = prompt('dimmi una parola');

//Creare una funzione per capire se la parola inserita è palindroma
let palindromeWord = parolaPalindroma(userWord);

function reverseWord (word) {
    let revertedWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
        const thisLetter = word[i];
        revertedWord += thisLetter;
    }
    console.log(revertedWord)

}