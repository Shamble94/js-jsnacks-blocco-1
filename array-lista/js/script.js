/* DICHIARIAMO LA CONST FRUTTA */
const frutta = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola']

/* TRAMITE PUSH ANDIAMO AD AGGIUNGERE ALL'ARRAY L'ELEMENTO PESCA */
let pesca = "pesca"
frutta.push(pesca)
console.log(frutta)

/* DICHIARIAMO VARIABILE FLAG */
let flag = false

/* CICLO FOR */
for (let i = 0; i < frutta.length; i++){
    /* IF PER VERIFICARE LA PRESENZA DEL VALORE COCOMERO ALL'INTERNO DELL'ARRAY */
    if ("cocomero" == frutta[i]){
        flag = true
    }
    
}

if (flag){
    /* SE IL COCOMERO è PRESENTE VERRA STAMPATO QUESTO MESSAGGIO */
    console.log("Trovato! Devo solo preparare il cocktail.")
}else{
    /* SE NON è PRESENTE STAMPERA INVECE QUESTO MESSAGGIO */
    console.log("Oh no, devo uscire a comprare il cocomero!")
}
