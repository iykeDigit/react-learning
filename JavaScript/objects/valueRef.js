const circle = {
    radius: 1,
    area: 2,
    color: 'red',
    draw() {
        console.log('draw');
    }
};

/*
Enumerating properties of an object
for(let key in circle){
    console.log(key, circle[key]);
}

for(let key of Object.keys(circle))
  console.log(key);

for(let entry of Object.entries(circle)){
    console.log(entry);
}
*/

//check is a given property is in an object
if('color' in circle) console.log('yes');