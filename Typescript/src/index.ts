// //Fundamentals
// let sales= 123456789;
// let course: string = 'typescript';

// //The any type
// //Arrays
// //Tuples
// let user: [number, string] = [1, 'Mosh'];

// //enums
// const enum Size{Small = 0, Medium = 1, Large = 2};
// enum Des{Size, Medium, Large};
// let mySize: Size = Size.Medium;
// //console.log(mySize);

// //Objects
// // let employee: {
// //     readonly id: number,
// //     name: string,
// //     retire: (date: Date) => void
// // } = {
// //     id: 1, 
// //     name: "Mosh", 
// //     retire: (date: Date) => {
// //         console.log(date);
// //     }
// // };

// //ADVANCED TYPES
// //Type Aliases
// type Employee = {
//     readonly id: number,
//      name: string,
//      retire: (date: Date) => void
// }

// //union types
// function kgToLbs(weight: number | string): number{
//     if(typeof weight === 'number')
//       return weight * 2.2
//     else return parseInt(weight) * 2.2;
// }

// kgToLbs(10);
// kgToLbs('10kg');

// //Intersection Types
// type Draggable = {
//     drag:() => void
// };

// type Resizable = {
//     resize:() => void
// };

// type UIWidget = Draggable & Resizable;
// let textBox: UIWidget = {
//     drag: () => {},
//     resize: () => {}
// }

// //Literal Types
// type quantity = 50 | 100
// let quantity =  50;
// type metric = 'cm' | 'inch';
// let metric = 'cm';

// //optional chaining
// type Customer = {
//     birthday?: Date
// };

// function getCustomer(id: number): Customer | null {
//     return id === 0 ? null : { birthday: new Date() };
// }

// let customer = getCustomer(1);
// //console.log(customer?.birthday?.getFullYear())
// //console.log()

// //optional element access operator
// //null coalescing 
// let speed: number | null = null;
// let ride = {
//     speed: speed ?? 30 //if speed is null or undefined use 30
// }

// //Type ASSERTIONS
// // let phone = document.getElementById('phone') as HTMLInputElement;
// // phone.value;
// // let list = <HTMLDataListElement> document.getElementById('list');
// // list.append;

//OBJECT ORIENTED PROGRAMING
//class
class Account{
    nickname?: string;

   constructor(
    public readonly id:number, 
    public owner:string, 
    private _balance:number) {
    }

    deposit(amount:number): void{
        if(amount <= 0 ) throw new Error("Invalid Amount")
        this._balance += amount;
    }

    private calculateTax(){

    }

    get balance(): number{
        return this._balance;
    }

    // set balance(value: number){
    //     if(value < 0) throw new Error('Invalid Value');
    //     this._balance = value;
    // }
}

//object
let account = new Account(1, 'Mosh', 0);
//account.balance = 0;
//console.log(account instanceof Account);

//Index Signatures
class SeatAssignment{
    [seatNumber: string]: string;
}

let seats = new SeatAssignment();
seats.A1 = 'Mosh';
seats.A2 = 'John';
seats['A3'] = "Josh";

//static members
class Ride{
    private static _activeRides: number = 0;

    start() {Ride._activeRides++; }
    stop() {Ride._activeRides--; }

    static get activeRides(){
        return Ride._activeRides;
    }
}

let ride1 = new Ride();
ride1.start();

let ride2 = new Ride();
ride2.start();

//console.log(Ride.activeRides);

//Inheritance
class Person{
   
   constructor(public firstname: string, public lastname: string) {}
    
    get fullName(){
        return this.firstname + ' ' + this.lastname;
    }

    walk(){
        console.log('Walking');
    }
}

class Student extends Person{
    /**
     *
     */
    constructor(public studentId: number, firstname: string, lastname: string) {
        super(firstname, lastname);
    }

    takeTest(){
        console.log('Taking the test');
    }
}

let student = new Student(1, 'John', 'Kehinde');

//Method Overriding
class Teacher extends Person{
    override get fullName(){
        return `Professor ${super.fullName}`;
    }
}

class Principal extends Person{
    override get fullName(){
        return `Principal ${super.fullName}`;
    }
}

let teacher = new Teacher('John', 'Smith');
console.log(teacher.fullName)

//POLYMORPHISM

function printNames(people: Person[]){
    for(let person of people){
        console.log(person.fullName);
    }
}

printNames([
    new Student(1, 'John', 'Smith'),
    new Teacher('Mosh', 'Hamedani'),
    new Principal('Danny', 'Wellbeck')
])

//INTERFACES
interface Calendar{
    name: string;
    addEvent(): void;
    removeEvent(): void;
}

interface CloudCalendar extends Calendar{
    sync(): void;
}

class GoogleCalendar implements Calendar{
    constructor(public name: string) {
               
    }
    addEvent(): void {
        throw new Error("Method not implemented.");
    }
    removeEvent(): void {
        throw new Error("Method not implemented.");
    }
    
}

//GENERICS
//classes
class KeyValuePair<K, V>{
    constructor(public key: K, public value: V){}
}

let pair = new KeyValuePair('1', 'a');

//functions
function arr<T>(value: T){
    return [value];
}

let numbers= arr(1);






















