abstract class LavoratoreAutonomo {
    protected codiceReddito:number;
    protected redditoAnnuoLordo:number;
    protected tasseInps:number;
    protected tasseIrpef:number;
    constructor(codiceReddito:number, redditoAnnuoLordo:number, tasseInps:number,  tasseIrpef:number){
        this.codiceReddito = codiceReddito;
        this.redditoAnnuoLordo = redditoAnnuoLordo;
        this.tasseInps = tasseInps;
        this.tasseIrpef = tasseIrpef;
    }
    
    abstract getUtileTasse():number;
    
    getCodiceReddito():number{
        return this.codiceReddito;
    }

    getRedditoAnnuoLordo():number{
        return this.redditoAnnuoLordo;
    }

    getTasseInps():number {
        return this.tasseInps;
    }

    getTasseIrpef():number {
        return this.tasseIrpef;
    }
    
    getRedditoAnnuoNetto():number {
        return this.redditoAnnuoLordo - this.getUtileTasse();
    }
}

class LavoratoreAutonomoImpl extends LavoratoreAutonomo{
    constructor(codiceReddito:number, redditoAnnuoLordo:number, tasseInps:number,  tasseIrpef:number){
        super(codiceReddito, redditoAnnuoLordo, tasseInps, tasseIrpef);
    }

    getUtileTasse(): number {
        return this.tasseInps + this.tasseIrpef;
    }
}

const lavoratore = new LavoratoreAutonomoImpl(1, 60000, 6000,20000);
const redditoNetto = lavoratore.getRedditoAnnuoNetto();


console.log(`Codice Reddito è: ${lavoratore.getCodiceReddito()}`);
console.log(`Reddito Annuo Lordo: ${lavoratore.getRedditoAnnuoLordo()}`);
console.log(`Tasse INPS: ${lavoratore.getTasseInps()}`);
console.log(`Tasse IRPEF: ${lavoratore.getTasseIrpef()}`);
console.log(`Reddito Annuo Netto: ${redditoNetto}`);



