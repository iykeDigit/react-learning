const numbers = [1,2,1,3,4];

function arrayFromRange(min,max){
    var arr = [];
    for(let i = min; i <= max; i++)
    {
        arr.push(i);
    }
    return arr;
}

//console.log(arrayFromRange(-10,-4));

//INCLUDES
function includes(array,item){
    for(let element of array){
        if(element === item)
          return true;
    }
}

//EXCEPT
function except(array, excluded){
    for(let i = 0; i < array.length; i++){
        if(excluded === array[i]){
            array.splice(i,1);
        }
    }
    return array;
}



//Moving an element
//numbers.splice(0,1,3)
function move(arr, index, offset){
    const position = index + offset;
    if(position >= arr.length || position < 0){
        console.error('Invalid offset');
        return;
    }

    const output = [...arr];
    let val = output.splice(index,1)[0];
    output.splice(index+offset,0, val)

    return output;
}



//Count Occurrences
function countOccurrences(array, searchElement){
    return array.reduce((accumulator, current)=>{
        const count = (current === searchElement) ? 1 : 0;
        return accumulator + count;
    },0);
}

//console.log(countOccurrences(numbers, 1));

//Get Max
function getMax(array){
    if(array.length === 0) return undefined;
    return array.reduce((a,b) => a > b ? a : b);
}

//console.log(getMax(numbers));

//Movies
const movies = [
    {title: 'a', year: 2018, rating: 4.5 },
    {title: 'b', year: 2018, rating: 4.7 },
    {title: 'c', year: 2018, rating: 3 },
    {title: 'd', year: 2017, rating: 4.5 }
];

const titles = movies
      .filter(m => m.year === 2018 && m.rating >= 4)
      .sort((a,b) => a.rating - b.rating)
      .reverse()
      .map(m => m.title);


console.log(titles);