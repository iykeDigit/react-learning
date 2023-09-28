const numbers = [1,-1,2,3];
const filtered = numbers.filter(n => n >= 0);

//map array element to html property
const items = filtered.map(n => `<li> ${n} </li>`);

const html = `<ul> ${items.join('')} </ul>`

//map array element to obj
const mapObj = filtered.map((n,index) => {
    return {
        value: n,
        index: index
    };
})

//arrow obj
const arr = filtered.map(n =>({value:n}));

//chaining multiple methods
const nums = [2,6,3,5,4];
let result = nums.sort()
             .filter(num => num % 2 == 0)
             .map(n => ({value: n}))
             .filter(obj => obj.value > 2);


console.log(result);