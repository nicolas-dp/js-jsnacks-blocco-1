/* SNACK 3
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */


let somma, numero_utente;
let i = 1;
somma= 0;

while (i <= 10) {
    numero_utente = parseInt(prompt(`Inerisci il ${i} numero`));
    somma = somma + numero_utente;
    i++;
}



console.log(`La somma di tutti i numeri inseriti è: ${somma}`);















