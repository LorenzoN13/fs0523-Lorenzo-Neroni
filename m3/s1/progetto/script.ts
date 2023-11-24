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
        this.costoMinuto = 0.3;
    }
    
    ricarica(euro: number): void {
        this.carica += euro;
        console.log(`Il credito residuo è: ${this.carica} euro. Il credito caricato è di: ${euro}.`);
    }

    numero404(): string{
       return `Il credito residuo è: ${this.carica} euro.`;
    }

    getNumeroChiamate(): number {
        return this.numeroChiamate;
    }

}   