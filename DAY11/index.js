function createBankAccount(initialBalance) {
    let balance = initialBalance;

    return {
        "deposit" : (amount) => {
            balance += amount;
            console.log("Deposited amount ", amount, "Current Balance ", balance)
        },
        "withdraw" : (amount) =>{
            if(amount > balance) {
                console.warn("Insufficient Fund.")
            } else {
                balance -= amount;
            console.log("Withdraw amount ", amount, "Current Balance ", balance)
            }         
        },
        "checkBalance" : () => console.log("Current Balance ", balance)
    }
}

const saadAccount = createBankAccount(1000);
console.log(saadAccount.deposit(500))
console.log(saadAccount.withdraw(600))
console.log(saadAccount.checkBalance())