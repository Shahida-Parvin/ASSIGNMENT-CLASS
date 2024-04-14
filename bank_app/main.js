class BankAccount {
    static lastAccountNumber = 1000; 

    constructor(ownerName, balance) {
        this.accountNumber = BankAccount.generateAccountNumber();
        this.ownerName = ownerName;
        this.balance = balance;
    }

    static generateAccountNumber() {
        return ++BankAccount.lastAccountNumber;
    }

    deposit(amount) {
        if (amount <= 0) {
            console.log("Deposit amount must be greater than zero.");
            return;
        }
        this.balance += amount;
        console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    }

    withdraw(amount) {
        if (amount <= 0) {
            console.log("Withdrawal amount must be greater than zero.");
            return;
        }
        if (amount > this.balance) {
            console.log("Insufficient funds");
            return;
        }
        this.balance -= amount;
        console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
    }

    getBalance() {
        return this.balance;
    }

    displayAccountInfo() {
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Owner Name: ${this.ownerName}`);
        console.log(`Balance: $${this.balance}`);
    }
}


const account1 = new BankAccount("John Doe", 500);
const account2 = new BankAccount("Jane Smith", 1000);


account1.deposit(200);
account1.withdraw(100);
account1.displayAccountInfo();

account2.deposit(500);
account2.withdraw(1500); 
account2.displayAccountInfo();

