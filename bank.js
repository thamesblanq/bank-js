class Account {
    constructor (balance) {
        this.balance = balance;

        this.credit = function (creditAmount){   // created the credit function
            this.amount = creditAmount;
            this.balance += this.amount;
             return `Credited $${this.amount}`;
        }

        this.debit = function (debitAmount){  // created the debit function
            this.amount = debitAmount;
            if (this.amount > this.balance) { // checks if the amount inputed is greater than the balance
                return 'Insufficient Funds';
            }
            else {
                this.balance -= this.amount;
                 return `$${this.amount} was debited`;
            }
        }

        this.getBalance = function (){ // created the getBalance function
            return '$' + this.balance;
            /* if (this.credit !== 0){
                return (this.balance + this.credit) - this.debit;
            }else {
                return this.balance -this.debit;
            } */
        }
    };
};

const momAccount = new Account(10000);
/* let momCredit = momAccount.credit(1000);
let momDebit = momAccount.debit(2000);
let momBalance = momAccount.getBalance(); */
console.log(momAccount.debit(1000));
console.log(momAccount.credit(4000));
console.log(momAccount.getBalance());
/* 
all working now phew! */



//creating another constructor

/* class Tutorials {
    constructor (name, founder, topics, teachers, website) {
        this.name = name;
        this.founder = founder;
        this.topics = topics;
        this.teachers = teachers;
        this.website = website;

        this.changeWebsite = (newWebsite) => {
            this.website = newWebsite;
        }
        
        this.removeTopic = (id) => {
            if (id <= topics.length){
                topics.forEach(elNum => {
                    if (elNum === id) {
                        topics//method here to delete that el at the specific index
                    }
                });// cant use pop here.... trying to remove the element at index (id + 1).... 
            }else {
                return alert('Input a valid Id');
            }
        }
    }
}

const fCC = new Tutorials;
fCC.topics = ['JavaScript', 'HTML', 'ASPNET', 'CSS', 'Python'];
fCC.name = 'FreeCodeCamp';
fCC.founder = 'Beau';
fCC.teacher = ['Beau', 'Quincy'];
fCC.website = 'freeCodeCamp.org';
fCC.changeWebsite('blanq.io');
//console.log(fCC.website);

//fCC.removeTopic(2);
console.log(fCC.topics);
 */
/* const topicArray = [...fCC.topics]; //REST operator
console.log(topicArray); */