function BankAccount() {
  this.account = []
}

BankAccount.prototype.addAccount = function(amount) {
  this.account.push(amount);
}

function RegisterAccount(name, initialDeposit, depositFunds, withdrawFunds) {
  this.name = name,
  this.initialDeposit = initialDeposit,
  this.depositFunds = depositFunds,
  this.withdrawFunds = withdrawFunds
}

RegisterAccount.prototype.currentBalance = function() {
  return (this.initialDeposit + this.depositFunds) - this.withdrawFunds;
}

$(document).ready(function()  {
  $(".btn").click(function() {
    var bankaccount = new BankAccount(
      $("#name").val(),
      $("#initialDeposit").val(),
      $("#depositFunds").val(),
      $("#withdrawFunds").val(),
    )
    var amount = bankaccount.currentBalance();
    //
    // $(".amount").number(amount);
    $("#show-balance").show();

    console.log(amount.currentBalance())
  });
});




// var account1 = new RegisterAccount("Bell", 500, 300, 200)
// var account2 = new RegisterAccount("Mia", 600, 200, 100)
//
// console.log(account1.name)
// console.log(account1.currentBalance())
// console.log(account2.name)
// console.log(account2.currentBalance())
