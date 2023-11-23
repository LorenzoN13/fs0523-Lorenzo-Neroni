"use strict";
class CapoDiAbbigliamento {
    constructor(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
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
    getsaldocapo() {
        return this.prezzoivainclusa - this.saldo;
    }
    getacquistocapo() {
        return this.prezzoivainclusa;
    }
}
const Url = 'Abbigliamento.json';
fetch(Url)
    .then(res => res.json())
    .then((data) => {
    data.forEach((abbiglamento) => {
        let capo = new CapoDiAbbigliamento(abbiglamento.id, abbiglamento.codprod, abbiglamento.collezione, abbiglamento.capo, abbiglamento.modello, abbiglamento.quantita, abbiglamento.colore, abbiglamento.prezzoivaesclusa, abbiglamento.prezzoivainclusa, abbiglamento.disponibile, abbiglamento.saldo);
        console.log(`Costo originale del capo: ${capo.getacquistocapo()} euro`);
        console.log(`Saldo applicato: ${capo.getsaldocapo()} euro`);
    });
});
//# sourceMappingURL=script.js.map