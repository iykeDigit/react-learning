var array1 = [5,6,9,4,11];
var found = array1.find(function(element){
    return element > 10;
    
});


const courses = [
    {id:1, name:'a'},
    {id:2, name: 'b'},
];

const course = courses.find(function(course){
    return course.name === 'b'; //check if element exists
});

//return the index
const courseb = courses.findIndex(function(course){
    return course.name === 'b';
})







console.log(courseb);