const normalPerson = {
    firstName: 'Rahim',
    lastName: "Uddin",
    salary: 15000,
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`;
    },
    chargeBill: function(amount, tips = 0, tax = 0){
        console.log(this);
        this.salary -= (amount + tips + tax);
        return this.salary;
    }
}

// console.log(normalPerson.firstName);
// console.log(normalPerson.chargeBill(150));
// console.log(normalPerson.getFullName())

const heroPerson = {
    firstName: 'Hero',
    lastName: 'balam',
    salary: 25000
};

const heroPerson1 = {
    firstName : 'zero',
    lastName : 'golam',
    salary : 35000
};

const heroPerson2 = {
    firstName : 'nero',
    lastName : 'salam',
    salary : 45000
};

// const heroPersonBill = normalPerson.chargeBill.bind(heroPerson);
// heroPersonBill(2000);
// heroPersonBill(2000);
// console.log(heroPerson.salary);
// console.log(normalPerson.salary);


// const heroPerson2Bill = normalPerson.chargeBill.bind(heroPerson2);
// heroPerson2Bill(2000);
// console.log(heroPerson2.salary);

//call 
// normalPerson.chargeBill.call(heroPerson, 1000, 100, 100);
// console.log(heroPerson.salary);

// apply
normalPerson.chargeBill.apply(heroPerson, [3000,100,100]);
console.log(heroPerson.salary)