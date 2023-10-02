//Sum of arguments
const sum = function(...items){
    if(items.length === 1 && Array.isArray(items[0]))
    items = [...items[0]];
return items.reduce((a,b) => a+b);
}

//console.log(sum(1,2,3,4))

//area of a circle
const circle = {
    radius: 1,
    get area(){
        return Math.PI * this.radius **2;
    }
};

//console.log(circle.area);

//ERROR HANDLING
function countOccurrences(array, searchElement){
    if(!Array.isArray(array)){
        throw new Error("array is not a valid array");
    }
    return array.reduce((accumulator, current) => {
        const occurrence = (current === searchElement) ? 1 : 0;
        return accumulator + occurrence;
    }, 0);
}

const numbers = [1,2,3,4];
try {
    const count = countOccurrences(true, 1);
    console.log(count);
} catch (error) {
    console.log(error.message);    
}