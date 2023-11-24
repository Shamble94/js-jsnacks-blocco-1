/* DICHIARIAMO I 2 ARRAY */
const array_1 = [1,2,3,4,5,6,8,10,11]
const array_2 = [7,6,67,5,4,8,10,10]

/* CICLO FOR PER GENERARE UN NUMERO E PUSHARLO NELL'ARRAY CON MENO ELEMENTI */
for (let i=0; i < array_1.length; i++){
    /* SE L'ARRAY1 HA UNA LUNGHEZZA MINORE DI ARRAY" */
    if (array_1.length > array_2.length){
        /* DICHIARIAMO VARIABILE elementi_array CONTENENTE NUMERI GENERATI RANDOMICAMENTE */
        let elementi_array = Math.floor((Math.random() * 100) + 1);
        /* STAMPIAMO IN CONSOLE */
        console.log(elementi_array)
        /* PUSH NELL'ARRAY */
        array_2.push(elementi_array);

    /* SE INVECE LA LUNGHEZZA DI ARRAY2 è MAGGIORE */
    }else if(array_2.length > array_1.length){
        /* DICHIARIAMO VARIABILE elementi_array CONTENENTE NUMERI GENERATI RANDOMICAMENTE */
        let elementi_array = Math.floor((Math.random() * 100) + 1);
        /* STAMPIAMO IN CONSOLE */
        console.log(elementi_array)
        /* PUSH NELL'ARRAY */
        array_1.push(elementi_array);
    }
    }

    console.log(array_1)
    console.log(array_2)