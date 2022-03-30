/* SNACK 5
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. */

//Creo un array vuoto

let numbers;
let arrayNumber = [];

for (let i = 1; i <= 6; i++) {
    numbers = parseInt(prompt("Inserisci un numero"));   
    console.log(numbers);
    if (numbers % 2 != 0) {
        arrayNumber.push(numbers)
    }
}

    

    console.log(arrayNumber);






