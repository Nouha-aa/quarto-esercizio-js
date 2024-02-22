// // esercizio 1

// let num1 = prompt("Inserisci il primo numero")
// let num2 = prompt("Inserisci il secondo numero")

// let numeriDaInserire = [num1, num2]


//   num1 = parseFloat(num1);
//   num2 = parseFloat(num2);

// let somma = num1 + num2;
// let moltiplicazione = num1 * num2;

// if ((isNaN(somma)) || (isNaN(moltiplicazione))) {
//     console.log("Numeri inseriti non validi. Riprova!");
// } else {
//     console.log("La somma dei numeri inseriti è: " + somma);
//     console.log("la moltiplicazione dei numeri inseriti è: " + moltiplicazione);
// }

// // esercizio 2

// function lunghezzaStringa(stringa) {
//     return stringa.length
// }

// let lunghezza = lunghezzaStringa("Ciao a tutti")
// console.log("Questa stringa è lunga: " + lunghezza);



/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum (n1, n2) {
    if (n1 === n2) {
        return (n1 + n2) * 3
    } else {
        return n1 + n2
    }
    
}

console.log(crazySum(5, 8));
console.log(crazySum(3, 3));

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(numero) {
    return (numero >= 20 && numero <= 100) || (numero === 400)
}

console.log(boundary(5));
console.log(boundary(15));
console.log(boundary(28));
console.log(boundary(100));
console.log(boundary(250));
console.log(boundary(400));

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(stringa) {
    let invertita = " "
    for (let i = stringa.length - 1; i >= 0; i--) {
        invertita = invertita + stringa[i];   
    }
    return invertita;
    
}

console.log(reverseString("MaleMale"));

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(stringa) {
    let frase = stringa.split(' ')

    for (let i = 0; i < frase.length; i++) {
        frase[i] = frase[i][0].toUppercase() + frase[i].slice(1)
    }
    return frase.join(' ');

}

let fraseReale = 'non so che scrivere.';
let fraseMaiuscolo = upperFirst(fraseReale)
console.log('Questa è la frase con ogni prima lettera maiuscola:', fraseMaiuscolo);


/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n) {
    let numeri = [];
    for (let i = 0; i < n; i++) {
        let casuale = Math.floor(Math.random() * 11)
        numeri.push(casuale)
    }
    return numeri;
}

console.log(giveMeRandom(6));

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1, l2) {
    return (l1 * l2)
}

console.log(area(3, 5));

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(numero) {
    let differenza = Math.abs(numero - 19);
    if (differenza > 19) {
        return differenza * 3;
    } else {
        return differenza;
    }
}

console.log(crazyDiff(3));
console.log(crazyDiff(25));
console.log(crazyDiff(-56));

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function codify(stringa) {
    if (stringa.startsWith("code")) {
        return stringa;
    } else {
        return "code " + stringa;
    }
    
}

console.log(codify("ciao chiunque tu sia!"));
console.log(codify("code with me!"));

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(numero) {
    return (numero % 3 === 0) || (numero % 7 === 0)
}

console.log(check3and7(9));
console.log(check3and7(14));
console.log(check3and7(17));

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(stringa) {
    return stringa.slice(1, -1);
    
}

console.log(cutString("Nouha"));
console.log(cutString("salve"));
