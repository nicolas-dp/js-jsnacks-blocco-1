/* SNACK 6
Stampa il cubo dei primi N numeri,
dove N è un numero indicato dall’utente.*/



let n_numero = parseInt(prompt("Indica quanti dei primi numeri vuoi ottenre il cubo?"));


let numeriRandomArray = new Array();

for (let i = 1; i < 100; i++) {
    numeriRandomArray.push(Math.floor(Math.random() * 10) + 1);   
}
console.log(numeriRandomArray);
for (let i = 0; i < n_numero; i++){
    let elementoArray = Math.pow(numeriRandomArray[i], 3);
    console.log(elementoArray);
}










