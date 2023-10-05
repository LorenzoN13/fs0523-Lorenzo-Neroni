/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
    
function area(l1,l2){
    return l1 * l2;
}
console.log( area(4,7) );


/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(n1,n2) {
    if (n1 === n2) {
        return (n1 + n2) *3;
    }else{
        return n1 + n2;
    }
}
    console.log(crazySum(3,6));
    console.log(crazySum(5,5));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(n) {
    let dif = Math.abs(n - 19);
    
    if (n > 19) {
        return dif * 3;
    }else{
        return dif;
    }
}
console.log(crazyDiff(16));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
   

function boundary(n) {
    if (n => 20 && n <= 100 || n === 400) {
        return true;
    }else{
      return false;
    }
}
    console.log(boundary(50));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(n) {
   
     return n > 0 && (n % 3 === 0 || n % 7 === 0);  
}
console.log(check3and7(5));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

    function reverseString(str) {
        return str.split('').reverse().join('');
    }
     console.log(reverseString("EPICODE"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

  function upperFirst(str) {
    return str.replace(/\b\w/g, match => match.toUpperCase());
}
    console.log(upperFirst("borsa, zaino"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(str) {
    return str.slice(1,-1);
}
    console.log(cutString("Lorenzo"));
    

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(n){
    let numCasual = [];
    for (let i = 0; i < n; i++) {
        const valore = Math.floor(Math.random() * 11); 
        numCasual.push(valore);
    }
    return numCasual;
}
    const num = giveMeRandom(6);
    console.log(num);