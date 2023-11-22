"use strict";
class LavoratoreAutonomo {
    constructor(codiceReddito, redditoAnnuoLordo, tasseInps, tasseIrpef) {
        this.codiceReddito = codiceReddito;
        this.redditoAnnuoLordo = redditoAnnuoLordo;
        this.tasseInps = tasseInps;
        this.tasseIrpef = tasseIrpef;
    }
    getCodiceReddito() {
        return this.codiceReddito;
    }
    getRedditoAnnuoLordo() {
        return this.redditoAnnuoLordo;
    }
    getTasseInps() {
        return this.tasseInps;
    }
    getTasseIrpef() {
        return this.tasseIrpef;
    }
    getRedditoAnnuoNetto() {
        return this.redditoAnnuoLordo - this.getUtileTasse();
    }
}
class LavoratoreAutonomoImpl extends LavoratoreAutonomo {
    constructor(codiceReddito, redditoAnnuoLordo, tasseInps, tasseIrpef) {
        super(codiceReddito, redditoAnnuoLordo, tasseInps, tasseIrpef);
    }
    getUtileTasse() {
        return this.tasseInps + this.tasseIrpef;
    }
}
const lavoratore = new LavoratoreAutonomoImpl(1, 60000, 6000, 20000);
const redditoNetto = lavoratore.getRedditoAnnuoNetto();
console.log(`Codice Reddito è: ${lavoratore.getCodiceReddito()}`);
console.log(`Reddito Annuo Lordo: ${lavoratore.getRedditoAnnuoLordo()}`);
console.log(`Tasse INPS: ${lavoratore.getTasseInps()}`);
console.log(`Tasse IRPEF: ${lavoratore.getTasseIrpef()}`);
console.log(`Reddito Annuo Netto: ${redditoNetto}`);
//# sourceMappingURL=scrcipt.js.map