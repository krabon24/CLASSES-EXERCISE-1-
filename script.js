class BankAccount {
    constructor(balance, interestRate) {
        this.balance = balance;
        this.interestRate = interestRate;
    }

    addInterest() {
        return this.balance + this.interestRate;   
    }

    printInterest() {
        console.log(`with interest: ${this.addInterest()}`);
    }

    makePayment(paymentAmount) {
        this.paymentAmount = paymentAmount;
        return this.paymentAmount - this.balance;
    }

    newBalance() {
        console.log(`new balance: ${this.makePayment(this.paymentAmount)}`);
    }
}

// const account = new BankAccount(50, 30);

class BankAccountWithFee extends BankAccount {
    constructor(balance, interestRate, fee) {
        super(balance, interestRate);  
        this.fee = fee;
} 

    applyFee() {
        return this.balance - this.fee;
    }

    minusFee() {
        console.log(`balance with fee subtracted: ${this.applyFee}`);
    }
}

BankAccount = new BankAccountWithFee(50, 30, 9);

console.log(BankAccount);
BankAccount.printInterest();
BankAccount.makePayment(30);
BankAccount.newBalance();
// console.log(sub);
BankAccount.applyFee();
// console.log(this.fee);
BankAccount.minusFee();
