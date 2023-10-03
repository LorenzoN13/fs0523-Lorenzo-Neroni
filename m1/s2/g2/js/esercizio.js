/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

const num1 = 12;
const num2 = 16;
let numMaggiore = trovaNum(num1, num2);

function trovaNum(num1, num2) {
  if(num1>num2){
     return num1;
  }else{
    return num2;
  }
}
console.log(numMaggiore);

/*
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
const n1 = 6;
let diverso = numeri(n1);

function numeri(n1) {
  if (n1 != 5) {
    console.log("notequal");
  }
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

const n2 = 10;
let risultato = parametri(n2);

function parametri(n2) {
  if (n2 % 5 === 0) {
    console.log("divisibile per 5");
  }
}
 
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

const number1 = 6;
const number2 = 14;

if (number1 === 8 ||number2 === 8 || number1 - number2 || number2 - number1) {
  console.log( "Il valore che abbiamo inserito nell'addizione/sottrazione da come rislutato 8");
}else{
  console.log("Nessun dei valori ottenuti sia con l'addizione che con la sottrazione da come risultato 8");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

const nu1 = 58;
let promozione =  totalShoppingCart(nu1);
function totalShoppingCart(nu1){
  if (nu1 > 50) {
    console.log("l'/utente ha diritto alla spesa gratuita");
  }else{
  console.log("la spedizione ha un costo fisso pari a 10");
}
}
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
{
let n3 = 3;
let n4 = 4;
let n5 = 5;
}


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
let number = [1,2,3,4]

console.log(typeof 0);
console.log(Array.isArray(number));

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let numE = 20;
let totale = numE % 2 === 0 ? "pari" : "dispari";

console.log(totale);

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 7;
if (val >= 10) {
  console.log("Uguale a 10 o maggiore");
} else if (val < 5) {
  console.log("Meno di 5");
} else {
  console.log("Meno di 10");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
    name: 'John',
    lastName: 'Doe',
    skills: ['javascript', 'html', 'css'],
    cyty:'Torono',
  }
  console.log(me);

  /* ESERCIZIO 12
    Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
  */
  {
    const me = {
      name: 'John',
      lastName: 'Doe',
      skills: ['javascript', 'html', 'css'],
      cyty:'Torono',
    }
    delete me.lastName;

    console.log(me);
  }
  /* ESERCIZIO 13
    Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
  */
      me.skills.pop();
      console.log(me);
  
  /* ESERCIZIO 14
    Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
  */
  
    let numero = [];

    numero.push(1,2,3,4,5,6,7,8,9,10);
    
    console.log(numero);
  
  /* ESERCIZIO 15
    Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
  */

  numero[9] = 100;

  console.log(numero);
  