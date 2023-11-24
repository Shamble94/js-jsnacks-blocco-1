/* CHIEDIAMO ALL'UTENTE QUANDO DESIDERA SIA GRANDE L'ARRAY */
let grandezza = prompt("Inserisci la grandezza dell'array")
/* DICHIARIAMO LA CONST ARRAY VUOTA */
const array = []

/* DICHIARIAMO VARIABILE RICHIESTA UTENTE PER SAPERE QUANTI ELEMENTI DELL'ARRAY VUOLE VISUALIZZARE */
let richiesta = prompt("Quanti elementi dell'array desideri vedere?")
/* CICLO FOR */
for (let i=0; i < grandezza; i++){
    /* DICHIARIAMO VARIABILE elementi_array CONTENENTE NUMERI GENERATI RANDOMICAMENTE */
    let elementi_array = Math.floor((Math.random() * 100) + 1);
    /* STAMPIAMO IN CONSOLE */
    console.log(elementi_array)
    /* PUSH NELL'ARRAY */
    array.push(elementi_array);
    }

/* STAMPIAMO IN CONSOLE L'ARRAY */
console.log(array)

/* STAMPIAMO IN CONSOLE LE ULTIME 5 CIFRE */
console.log(array.slice((array.length - 5), array.length))

/* STAMPIAMO IN CONSOLE LE ULTIME CIFRE IN BASE ALLA RICHIESTA DELL'UTENTE */
console.log(array.slice((array.length - richiesta), array.length))