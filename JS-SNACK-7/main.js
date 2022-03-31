/* SNACK 7
Stampa le potenze di 2 fino a 1000.*/



let potenza = 0;
let arrayPotenza = new Array();
let pow_mille = 1000;

for (let i = 1; i <= 100; i++) {
    potenza = Math.pow(2, i);
    
    if (potenza <= pow_mille) {
        arrayPotenza.push(potenza); 
    }
    
}

console.log(arrayPotenza);










