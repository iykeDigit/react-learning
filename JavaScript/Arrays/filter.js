const numbers = [1,-1,2,3];

const filtered = numbers.filter(function(value){
    return value >= 0;
});

const filteredArrow = numbers.filter(value => value >= 0);

const greaterThanOne = numbers.filter(value => value > 1);

const even = numbers.filter(value => value % 2 == 0);

console.log(even);