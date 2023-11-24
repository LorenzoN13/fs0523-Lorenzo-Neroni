"use strict";
class Smartphone {
    constructor(carica, numeroChiamate, costoMinuto) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
        this.costoMinuto = costoMinuto;
        this.carica = 0;
        this.numeroChiamate = 0;
        this.costoMinuto = 0.3;
    }
    ricarica(euro) {
        this.carica += euro;
    }
    numero404() {
        return `Il credito residuo è: ${this.carica} euro.`;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    chiamata(min) {
        const costoChiamata = min * this.costoMinuto;
        if (this.carica >= costoChiamata) {
            this.carica -= costoChiamata;
            this.numeroChiamate++;
        }
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
const smartphone = new Smartphone(0, 0, 0.3);
smartphone.ricarica(10);
console.log(`Il credito residuo è di: ${smartphone.carica} euro.`);
const minuti = 5;
smartphone.chiamata(minuti);
console.log(`Chiamata: Tempo in linea è di: ${minuti} minuti.`);
console.log(smartphone.numero404());
smartphone.azzeraChiamate();
console.log(`Chiamate azzerate con successo.`);
//# sourceMappingURL=script.js.map