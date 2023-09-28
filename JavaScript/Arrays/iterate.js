const numbers = ['my',2,1,5,3];

// for(let number of numbers){
//     console.log(number);
// }

// numbers.forEach(function(number){
//     console.log(number);
// })


//numbers.forEach((number,index) => console.log(number, index));

//JOIN
const joined = numbers.join(',');


//split
const message = "This is my first message";
const parts = message.split(' ');

//sorting
const courses = [
    {id:1, name: 'Node.js'},
    {id:2, name: 'JavaScript'},
];

//numbers.sort();
//numbers.reverse();
courses.sort(function(a,b){
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if(nameA < nameB) return -1;
    if(nameA > nameB) return 1;
    return 0;
});


console.log(courses);





