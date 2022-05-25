// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

var somma = []; 
i = 0;

while (i < 5) {
    i++;
    numero = prompt("Inserisci il numero")
    somma.push(parseInt(numero));
}

sum = 0;
for(let i = 0; i < somma.length; i++) {
    sum = sum + somma[i];
}

console.log(sum);