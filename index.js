
class Account {
  constructor(username) {
    this.username = username;
    this.transactions = [];
  }

  get balance() {
    let balance = 0;
    for (let transaction of this.transactions) {
      balance += transaction.value;
    }
    return balance;
  }

  addTransaction(transaction) {
    this.transactions.push(transaction)
  }
}

class Transaction {
  constructor(amount, account) {
    this.amount = amount,
    this.account = account;
  }

  commit() {
    if(this.isAllowed()) {
      this.time = new Date();
      this.account.addTransaction(this)
      return true;
    } else {
      return false;
    }
  }
}

class Withdrawal extends Transaction {
  get value() {
    return -this.amount;
  }

  isAllowed() {
    if(this.amount > this.account.balance) {
      return false
    }
    return true;
  }
}

class Deposit extends Transaction {
  get value() {
    return this.amount;
  }

  isAllowed() {
    // deposits always allowed thanks to capitalism.
    return true;
  }
}

// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const myAccount = new Account('billybob');


const t1 = new Deposit(120.00, myAccount);
const t2 = new Withdrawal(500.00, myAccount);
t1.commit();
console.log('Transaction Result: ', t2.commit())



