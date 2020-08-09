// new keyword

class Person {
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroPerson = new Person('anik', 'sarker', 50000);
console.log(heroPerson);
const heroPerson1 = new Person('anik', 'sarker', 70000);
console.log(heroPerson1);