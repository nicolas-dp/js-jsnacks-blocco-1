/* SNACK 7
Stampa le potenze di 2 fino a 1000.*/



let potenza;
let arrayPotenza = [];
let pow_mille;

for (let i = 1; i <= 1000; i++) {
    potenza = Math.pow(2, i);
    arrayPotenza.push(potenza);

}

console.log(arrayPotenza);







