/* SNACK 5
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. */

//Creo un array vuoto

let numbers;
let arrayNumber = [];
let verifica = false;

for (let i = 1; i <= 6; i++) {
    numbers = parseInt(prompt("Inserisci un numero"));
    if (numbers % 2 != 0) {
        arrayNumber.push(numbers)
        console.log(arrayNumber);
        console.log(`I numeri dispari inserire all'interno dell'array sono: ${arrayNumber}`);
    } else if (arrayNumber == "") {
        console.log("Non sono presenti numeri dispari indicati dall'utente");
    }

}



