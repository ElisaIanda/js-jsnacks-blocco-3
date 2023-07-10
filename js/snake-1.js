// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando 
// la somma degli elementi è minore di 50.

const listNumbers = [];
let userNumbers;
let somma = 0;
const response = document.getElementById ("response");

do{
    // chiedo all'utente di inserire dei numeri
    userNumbers = parseInt(prompt("Inserisci un numero da 0 a 50"));
    // Pusho i numeri inseriti dall'utente nella array
    listNumbers.push(userNumbers);
    // Faccio la somma dei numeri inseriti
    somma += userNumbers;
    console.log(listNumbers);
    console.log(somma);

    response.innerHTML =`La lista dei tuoi numeri è: ${listNumbers} e la somma è ${somma}.`;
    
} while (somma < 50);

