/* SNACK 8
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.*/



let numero_richiesto = prompt("Inserisci un numero di 4 cifre");

/* let result = numero_richiesto.slice(0, 4); */
let numeriArray = numero_richiesto.split("")
let somma = 0;


/* console.log(result); */
console.log(numeriArray);
for (let i = 0; i < numeriArray.length; i++) {
    somma += parseInt(numeriArray[i]);
    
    
}


console.log(somma);








