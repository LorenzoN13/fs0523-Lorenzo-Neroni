interface SmartphoneInterface{
    carica:number;
    numeroChiamate:number;
    costoMinuto:number;
    ricarica(euro:number):void;
    numero404():string;
    getNumeroChiamate():number;
    chiamata(min:number):void;
    azzeraChiamate():void;
}

class Smartphone implements SmartphoneInterface{
    constructor(
        public carica:number,
        public numeroChiamate:number,
        public costoMinuto:number,
    ){
        this.carica = 0;
        this.numeroChiamate = 0;
        this.numeroChiamate = 0.3;
    }
}