// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
// Continua a chiedere i numeri all’utente e a inserirli nell’array
// fino a quando la somma degli elementi è minore di 50.


// creo array vuoto dove sommare
var somma = []; 

// ciclo do-while che si ferma fino a prima di 50
do {
    numero = prompt("Inserisci il numero");
    somma.push(parseInt(numero));

    sum = 0;

    for(let i = 0; i < somma.length; i++) {
        sum = sum + somma[i]
    }



} while (sum < 50);

console.log(sum);
