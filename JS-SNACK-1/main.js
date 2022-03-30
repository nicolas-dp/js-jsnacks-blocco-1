/* SNACK 1 
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */


//Chiediamo all'utente il primo numero
const first_number = parseInt(prompt("Inserisci il primo numero scelto"));

//Chiediamo all'utente il secondo numero
const second_number = parseInt(prompt("Inserisci il secondo numero"))

//Il software stampa il maggiore

if (first_number > second_number) {
    console.log("Il primo numero è maggiore del secondo");
} else if (second_number > first_number) {
    console.log("Il secondo numero è maggiore del primo");
} else {
    alert("I due numeri sono uguali")
}
