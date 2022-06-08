/* exported Bank */
function Bank(nextAccountNumber = 1, accounts = []) {
  this.nextAccountNumber = nextAccountNumber;
  this.accounts = accounts;
}

Bank.prototype.openAccount = function (holder, balance) {
  if (Number.isInteger(balance)) {
    if (balance > 0) {
      var newAccount = new Account(this.nextAccountNumber, holder);
      newAccount.deposit(balance);
      this.accounts.push(newAccount);
      this.nextAccountNumber++;
      return newAccount.number;
    }
  }
  return null;
};

Bank.prototype.getAccount = function (number) {
  for (var i = 0; i < this.accounts.length; i++) {
    var account = this.accounts[i];
    if (account.number === number) {
      return account;
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  var balance = 0;
  for (var i = 0; i < this.accounts.length; i++) {
    var account = this.accounts[i];
    for (var x = 0; x < account.transactions.length; x++) {
      var transaction = account.transactions[x];
      if (transaction.type === 'deposit') {
        balance += transaction.amount; // adding money
      } else {
        balance -= transaction.amount; // taking money
      }
    }
  }
  return balance;
};
