function game(giocatore1:number, giocatore2:number) {

    giocatore1 = Math.floor(Math.random() * 100) + 1;
    console.log(giocatore1);
    giocatore2 = Math.floor(Math.random() * 100) + 1;
    console.log(giocatore2);
    
    const numberCasual = Math.floor(Math.random() * (100 - 1) + 1);

    console.log(`Il numero generato è: ${numberCasual}`);

    let numSceltoGiocatore1:number = Math.abs(numberCasual - giocatore1);
    let numSceltoGiocatore2:number = Math.abs(numberCasual - giocatore2);

    if (giocatore1 === numberCasual) {
        console.log("Giocatore 1 ha indovinato!");
    } else if (giocatore2 === numberCasual) {
        console.log("Giocatore 2 ha indovinato!");
    } else {
        if (numSceltoGiocatore1 === numSceltoGiocatore2) {
            console.log("Nessuno dei due ha azzeccato il numero casuale, ma sono alla stessa distanza!");
        } else if (numSceltoGiocatore1 < numSceltoGiocatore2) {
            console.log("Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!");
        } else {
            console.log("Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 2 si è avvicinato di più!");
        }
    }
}
game();