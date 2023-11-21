"use strict";
class SonAccount {
    constructor() {
        this.balance = 0;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            console.log("Saldo insufficente per il prelievo.");
        }
    }
}
let sonAccount = new SonAccount();
class MotherAccount extends SonAccount {
    depositWhitInterest(amount) {
        this.deposit(amount);
        const interest = this.balance * 0.10;
        this.balance += interest;
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            console.log("Saldo insufficente per il prelievo.");
        }
    }
}
let motherAccount = new MotherAccount();
sonAccount.deposit(150);
sonAccount.withdraw(100);
motherAccount.depositWhitInterest(400);
motherAccount.withdraw(200);
console.log("Saldo conto del figlio:", sonAccount.balance);
console.log("Saldo conto della madre:", motherAccount.balance);
//# sourceMappingURL=script.js.map