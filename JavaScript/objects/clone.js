const person = {
    name: 'Ike',
    age: '32',
    createPerson(){
        console.log('Human');
    }
};

// const another = {};
// for(let key in person)
//   another[key] = person[key];

//   console.log(another);

//const anotherPerson = Object.assign({}, person);
const another = {...person};
console.log(another);