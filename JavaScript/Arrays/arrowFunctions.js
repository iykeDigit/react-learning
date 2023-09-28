const courses = [
    {id:1, name:'a'},
    {id:2, name: 'b'},
];

const course = courses.find(course => course.name === 'a');

const index = courses.findIndex((course) => {
    return course.name === 'b';
});

console.log(index);