const numbers = [3,4];
numbers.push(5,6); //add at the end
numbers.unshift(7,8); //add at the begining

//Middle
numbers.splice(2,0,'a','b');


console.log(numbers);