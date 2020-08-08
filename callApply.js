const normalPerson = {
    firstName: 'Rahim',
    lastName: "Uddin",
    salary: 15000,
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`
    },
    chargeBill: function(amount){
        this.salary -= amount;
        return this.salary;
    }
}

console.log(normalPerson.firstName);
console.log(normalPerson.chargeBill(150));
console.log(normalPerson.getFullName())