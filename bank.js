class Account {
    constructor (balance) {

        this.credit = function (amount){   // created the credit function
            this.balance += this.amount;
            `Credited ${this.amount}`;
        }

        this.debit = function (amount){  // created the debit function
            if (this.amount > this.balance) { // checks if the amount inputed is greater than the balance
                return 'Insufficient Funds';
            }
            else {
                this.balance -= this.amount;
                `${this.amount} was debited`;
            }
        }

        this.getBalance = function (){ // created the getBalance function
            return (this.balance + this.credit) - this.debit;
        }
    };
};

let momAccount = new Account(10000);
momAccount.credit(1000);
momAccount.debit(2000);
momAccount.getBalance();
console.log(momAccount);