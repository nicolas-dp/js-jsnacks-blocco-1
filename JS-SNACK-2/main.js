/* SNACK 2 
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga. */


//Chiediamo all'utente la prima parola
const first_word = prompt("Inserisci la prima parola scelta");

//Chiediamo all'utente la seconda parola
const second_word = prompt("Inserisci la seconda parola scelta");

console.log(first_word);
console.log(second_word);

//Il software stampa prima la parola più corta e poi quella più lunga
if (first_word == "" || second_word =="") {
    console.log("Amico non hai inserito le parole correttamente!!!!");
} else if (first_word.length > second_word.length) {
    console.log(`E' la parola più CORTA è: ${second_word}`);
    console.log(`E' la parola più LUNGA è: ${first_word}`);
} else if (first_word.length < second_word.length) {
    console.log(`E' la parola più CORTA è: ${first_word}`);
    console.log(`E' la parola più LUNGA è: ${second_word}`);
} else {
    console.log(`Le due parole ${first_word} e ${second_word} hanno la stessa lunghezza`);
}


