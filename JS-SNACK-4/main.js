/* SNACK 4
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa. */


//Dichiaro un array con i nomi degli invitati alla festa

const festaArray = new Array("ciro", "pino", "franco", "gina", "pina", "array potter");
let verifica = false;
let nome_utente = prompt("Come ti chiami?");

for (let i = 0; i < festaArray.length; i++) {
    //recupero il singolo elemento nell'array
    const elementFestaArray = festaArray[i];
    if (nome_utente == elementFestaArray) {
        //Imposto la verifica su true quando il nome_utente è presente nell'array
        verifica = true;
    }
}

if (verifica == true) {
    // quando il nome_utente è presente nell'array lo stampo in console
    console.log(`${nome_utente.toUpperCase()} Sei stato invitato alla festa`);
} else {
    // altrimenti se non è presente vuol dire che la variabile verifica è rimasta su false e qundi
    // l'utente non è stato invitato
    console.log(`${nome_utente.toUpperCase()} Non sei presente tra gli invitati`);
}








