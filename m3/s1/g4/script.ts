class CapoDiAbbigliamento{
    id:number;
    codprod:number;
    collezione:string;
    capo:string;
    modello:number;
    quantita:number;
    colore:string;
    prezzoivaesclusa:number;
    prezzoivainclusa:number;
    disponibile:string;
    saldo:number;

    constructor( id: number, codprod:number, collezione:string,  capo:string, modello:number, quantita:number, colore:string, prezzoivaesclusa:number, prezzoivainclusa:number, disponibile:string, saldo:number){
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }

    getsaldocapo():number{
        return this.prezzoivainclusa - this.saldo;
    }

    getacquistocapo():number{
        return this.prezzoivainclusa;
    }
}

const Url:string = 'Abbigliamento.json';

fetch(Url)
.then(res => res.json())
.then((data:any) => {
    data.forEach((abbiglamento:any) => {
        let capo = new CapoDiAbbigliamento(
            abbiglamento.id,
            abbiglamento.codprod,
            abbiglamento.collezione,
            abbiglamento.capo,
            abbiglamento.modello,
            abbiglamento.quantita,
            abbiglamento.colore,
            abbiglamento.prezzoivaesclusa,
            abbiglamento.prezzoivainclusa,
            abbiglamento.disponibile,
            abbiglamento.saldo
        );
        console.log(`Costo originale del capo: ${capo.getacquistocapo()} euro`);
        console.log(`Saldo applicato: ${capo.getsaldocapo()} euro`);
    });
})
