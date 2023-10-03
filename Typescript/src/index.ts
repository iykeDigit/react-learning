//Fundamentals
let sales= 123456789;
let course: string = 'typescript';

//The any type
//Arrays
//Tuples
let user: [number, string] = [1, 'Mosh'];

//enums
const enum Size{Small = 0, Medium = 1, Large = 2};
enum Des{Size, Medium, Large};
let mySize: Size = Size.Medium;
//console.log(mySize);

//Objects
// let employee: {
//     readonly id: number,
//     name: string,
//     retire: (date: Date) => void
// } = {
//     id: 1, 
//     name: "Mosh", 
//     retire: (date: Date) => {
//         console.log(date);
//     }
// };

//ADVANCED TYPES
//Type Aliases
type Employee = {
    readonly id: number,
     name: string,
     retire: (date: Date) => void
}

//union types
function kgToLbs(weight: number | string): number{
    if(typeof weight === 'number')
      return weight * 2.2
    else return parseInt(weight) * 2.2;
}

kgToLbs(10);
kgToLbs('10kg');

//Intersection Types
type Draggable = {
    drag:() => void
};

type Resizable = {
    resize:() => void
};

type UIWidget = Draggable & Resizable;
let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

//Literal Types
type quantity = 50 | 100
let quantity =  50;
type metric = 'cm' | 'inch';
let metric = 'cm';

//optional chaining
type Customer = {
    birthday?: Date
};

function getCustomer(id: number): Customer | null {
    return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);
console.log(customer?.birthday?.getFullYear())
console.log()

//optional element access operator
//null coalescing 
let speed: number | null = null;
let ride = {
    speed: speed ?? 30 //if speed is null or undefined use 30
}

//Type ASSERTIONS
let phone = document.getElementById('phone') as HTMLInputElement;
phone.value;
let list = <HTMLDataListElement> document.getElementById('list');
list.append;
