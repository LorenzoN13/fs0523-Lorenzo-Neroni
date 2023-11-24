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
}
//# sourceMappingURL=script.js.map