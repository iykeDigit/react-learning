const numbers = [-1,2,3];
const allPositive = numbers.every(function(value){
    return value >= 0;
})

const somePositive = numbers.some(function(value){
    return value >= 0;
})

console.log(somePositive);