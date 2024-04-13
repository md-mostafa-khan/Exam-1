
class BankAccount {
  constructor(accountNumber, ownerName, balance) {
    this.accountNumber = accountNumber;   
    this.ownerName = ownerName;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited $${amount}. New balance: $${this.balance}`);
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient funds");
    } else {
      this.balance -= amount;
      console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
    }
  }

  getBalance() {
    return this.balance;
  }

  displayAccountInfo() {
    console.log("Initial account information:");
    console.log(`Account Number: ${this.accountNumber}`);
    console.log(`Owner Name: ${this.ownerName}`);
    console.log(`Balance: $${this.balance}`);
  }
  
  updateBalance() {
    console.log("Update account information:");
    console.log(`Account Number: ${this.accountNumber}`);
    console.log(`Owner Name: ${this.ownerName}`);
    console.log(`Balance: $${this.balance}`);
  }
}


const account1 = new BankAccount(1001, "Rabbil Hasan", 10000);
const account2 = new BankAccount(1002, "Mostafa khan", 5000);


account1.displayAccountInfo();
console.log("                             ");
console.log("deposit and withdraw information:");
account1.deposit(1000);
account1.withdraw(3000);
account1.getBalance();
console.log("                             ");
account1.updateBalance();
console.log("---------------------------------");
account2.displayAccountInfo();
console.log("                             ");
console.log("deposit and withdraw information:");
account2.deposit(6000);
account2.withdraw(4000);
account2.getBalance();
console.log("                             ");
account2.updateBalance();
