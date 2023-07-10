// Crea due tag div con due id diversi. 
// Un div avrà il testo colorato di rosso mentre l’altro di verde. 
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari 
// e in verde i numeri pari.

const listNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10" ];
const redDispari = document.getElementById ("red-dispari");
const greenPari = document.getElementById ("green-pari");


for (let i = 0; i < listNumbers.length; i++) {
    if (listNumbers[i] % 2 !== 0) {

        console.log(listNumbers[i]);
        redDispari.innerHTML +=`${listNumbers[i]} `;     

    } else {

        console.log(listNumbers[i]);
        greenPari.innerHTML += `${listNumbers[i]} `;

    }
}








