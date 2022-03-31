/* SNACK 9
Calcola la somma e la media dei primi 10 numeri.*/


let arrayNumbers = new Array();
let n_numero = 10;
let media = 0;
let somma = 0;

for (let i = 0; i < 100; i++) {
    arrayNumbers.push(Math.floor(Math.random() * 100) + 1);   
}

console.log(arrayNumbers);

for (let i = 0; i < n_numero; i++){
    somma += arrayNumbers[i];
    media += somma / n_numero;
    
    
}

console.log(`La somma dei primi 10 numeri è: ${somma} || La media dei primi 10 numeri è: ${media.toFixed(2)}`);



