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
        console.log(`Il credito residuo è: ${this.carica} euro. Il credito caricato è di: ${euro}.`);
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
            console.log(`Tempo in lineaa è di: ${min} minuti. Credito residuo è di: ${this.carica} euro.`);
        }
        else {
            console.log(`Credito insufficente per svolgere la chiamata.`);
        }
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
        console.log(`Chiamate azzerate.`);
    }
}
//# sourceMappingURL=script.js.map