var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Asaad",
    bankAccount: bankAccount,
    hobbies: ["Violin", "cooking"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
console.log("===============================================");
