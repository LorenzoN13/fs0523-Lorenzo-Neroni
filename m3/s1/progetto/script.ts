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
    
    public ricarica(euro: number): void {
        this.carica += euro;
    }

    public numero404(): string{
       return `Il credito residuo è: ${this.carica} euro.`;
    }

    public getNumeroChiamate(): number {
        return this.numeroChiamate;
    }

    public chiamata(min: number): void {
        const costoChiamata:number = min * this.costoMinuto;

        if (this.carica >= costoChiamata){
            this.carica -= costoChiamata;
            this.numeroChiamate++;
        }
    }

    public azzeraChiamate(): void {
        this.numeroChiamate = 0;
    }
}

const smartphone = new Smartphone(0, 0, 0.3);
smartphone.ricarica(10);
console.log(`Il credito residuo è di: ${smartphone.carica} euro.`);

const minuti = 5;
smartphone.chiamata(minuti)
console.log(`Chiamata: Tempo in linea è di: ${minuti} minuti.`);

console.log(smartphone.numero404());

smartphone.azzeraChiamate();
console.log(`Chiamate azzerate con successo.`);
