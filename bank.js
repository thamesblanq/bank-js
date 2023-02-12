class Account {
    constructor (balance) {
        this.balance = balance;

        this.credit = function (amount){   // created the credit function
            this.amount = amount;
            this.balance += this.amount;
            `Credited ${this.amount}`;
        }

        this.debit = function (amount){  // created the debit function
            this.amount = amount;
            if (this.amount > this.balance) { // checks if the amount inputed is greater than the balance
                return 'Insufficient Funds';
            }
            else {
                this.balance -= this.amount;
                `${this.amount} was debited`;
            }
        }

        this.getBalance = function (){ // created the getBalance function
            if (this.credit !== 0){
                return (this.balance + this.credit) - this.debit;
            }else {
                return this.balance -this.debit;
            }
        }
    };
};

const momAccount = new Account(10000);
let momCredit = momAccount.credit(1000);
let momDebit = momAccount.debit(2000);
let momBalance = momAccount.getBalance();
console.log(momCredit);



//creating another constructor

class Tutorials {
    constructor (name, founder, topics, teachers, website) {
        this.name = name;
        this.founder = founder;
        this.topics = topics;
        this.teachers = teachers;
        this.website = website;

        this.changeWebsite = (newWebsite) => {
            this.website = newWebsite;
        }
        
        
        this.addTopic = (newTopic) => {
            newTopic.split(""); //separates the string with a ""
            topics.push(newTopic);
        }

        this.removeTopic = (id) => {
            if (id === topics[id]){
                return topics[id].pop();
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
console.log(fCC.website);

/* const topicArray = [...fCC.topics]; //REST operator
console.log(topicArray); */