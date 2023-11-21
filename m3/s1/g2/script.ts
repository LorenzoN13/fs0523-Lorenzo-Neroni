class SonAccount {
    balance:number = 0;

    deposit(amount:number):void{
        this.balance += amount;
    }

    withdraw(amount:number):void{
        if (amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log("Saldo insufficente per il prelievo."); 
        }
    }
}

let sonAccount = new SonAccount();

class  MotherAccount extends SonAccount {
    depositWhitInterest(amount:number):void{
        this.deposit(amount);
        const interest:number = this.balance * 0.10;
        this.balance += interest;
    }
    
    withdraw(amount:number):void{
        if (amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log("Saldo insufficente per il prelievo."); 
        }
    }  
}

let motherAccount = new MotherAccount();


sonAccount.deposit(150);
sonAccount.withdraw(100)

motherAccount.depositWhitInterest(400);
motherAccount.withdraw(200);

console.log("Saldo conto del figlio:", sonAccount.balance);
console.log("Saldo conto della madre:", motherAccount.balance);

