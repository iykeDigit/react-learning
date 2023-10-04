"use strict";
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Invalid Amount");
        this._balance += amount;
    }
    calculateTax() {
    }
    get balance() {
        return this._balance;
    }
}
let account = new Account(1, 'Mosh', 0);
class SeatAssignment {
}
let seats = new SeatAssignment();
seats.A1 = 'Mosh';
seats.A2 = 'John';
seats['A3'] = "Josh";
class Ride {
    start() { Ride._activeRides++; }
    stop() { Ride._activeRides--; }
    static get activeRides() {
        return Ride._activeRides;
    }
}
Ride._activeRides = 0;
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();
class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    get fullName() {
        return this.firstname + ' ' + this.lastname;
    }
    walk() {
        console.log('Walking');
    }
}
class Student extends Person {
    constructor(studentId, firstname, lastname) {
        super(firstname, lastname);
        this.studentId = studentId;
    }
    takeTest() {
        console.log('Taking the test');
    }
}
let student = new Student(1, 'John', 'Kehinde');
class Teacher extends Person {
    get fullName() {
        return `Professor ${super.fullName}`;
    }
}
class Principal extends Person {
    get fullName() {
        return `Principal ${super.fullName}`;
    }
}
let teacher = new Teacher('John', 'Smith');
console.log(teacher.fullName);
function printNames(people) {
    for (let person of people) {
        console.log(person.fullName);
    }
}
printNames([
    new Student(1, 'John', 'Smith'),
    new Teacher('Mosh', 'Hamedani'),
    new Principal('Danny', 'Wellbeck')
]);
//# sourceMappingURL=index.js.map