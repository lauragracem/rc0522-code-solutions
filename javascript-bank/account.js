/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (Number.isInteger(amount)) {
    if (amount > 0) {
      this.transactions.push(new Transaction('deposit', amount));
      return true;
    }
    return false;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  if (Number.isInteger(amount)) {
    if (amount > 0) {
      this.transactions.push(new Transaction('withdrawal', amount));
      return true;
    }
    return false;
  } else {
    return false;
  }

};

// Account.prototype.getBalance = function () {
//   var balance = 0;
//   for (var i = 0; i < this.transactions.length; i++) {
//     var transaction = this.transactions[i];
//     if (transaction.type === 'withdrawal') {
//       balance -= transaction.amount;
//     } else if (transaction.type === 'deposit') {
//       balance += transaction.amount;
//     }
//   }
//   if (balance <= -1) {
//     return false;
//   } else {
//     return true;
//   }
// };
