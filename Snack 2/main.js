// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array, ognuno formato da 10 numeri casuali da 1 a 100.
// Ogni volta che ne crei uno, stampalo.

// inseriamo un numero
var numero = parseInt(prompt("Inserisci un numero"));

const arraygenerati = [];

// dobbiamo generare tanti array quanto il valore della var numero (come???)
while (arraygenerati.length < numero) {
    const nuovoarray = [];

// ogni array avrà Math.floor(Math.random() * 101) per 10
    while(nuovoarray.length < 10) {
        const numerocasuale = Math.floor(Math.random() * 100) + 1;

        nuovoarray.push(numerocasuale);
    }


    arraygenerati.push(nuovoarray);
}

console.log(arraygenerati);