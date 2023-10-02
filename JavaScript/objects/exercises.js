function createCircle(parameter){
    return {
        radius: parameter,
        draw(){
            console.log('draw');
        }
    };
}

function createAddress(street, city, zipCode)
{
    return{
        street,
        city,
        zipCode,
        showAddress(){
            console.log(`${street},  ${city},  ${zipCode}`);
        }
    }
}



let newAddress = {
    street: 'a',
    city: 'b',
    zipCode: 'c'
};

function showAddress(address){
    for(let key in address){
        console.log(key, address[key]);
    }
}



//factory function
function factoryAddress() {
    return{
    street: 'a',
    city: 'b',
    zipCode: 'c'
    }
}

//let address = createAddress('Angus Drive', "North York", 'M2J 2W9');
//Constructor function
function Address(street, city, zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

let address = new Address('Angus Drive', "North York", 'M2J 2W9');


//Equality
let address1 = new Address('a', 'b', 'c');
let address2 = new Address('a', 'b', 'c');

function Address(street, city, zipCode)
{
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

function areEqual(address1, address2){
    return address1.street === address2.street 
    && address1.city === address2.city
    && address1.zipCode === address2.zipCode
}

function areSame(address1, address2){
    return address1 === address2;
}

//Blog Post object Literal
let post = {
    title: 'a',
    body: 'b',
    author: 'c',
    views: 10,
    comments: [
        {author: 'a', body: 'b'},
        {author: 'c', body: 'd'},
    ],
    isLive: true
};

//constructor
function Post(title, body, author){
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

let posts = new Post('a', 'b', 'c')

//Price Ranges
let priceRanges = [
    {label: '$', tooltip: 'Inexpensive', minPerson: 0, maxPerson: 10},
    {label: '$$', tooltip: 'Moderate', minPerson: 11, maxPerson: 20},
    {label: '$$$', tooltip: 'Expensive', minPerson: 21, maxPerson: 50}
];

let restaurants = [
    {averagePerPerson: 5}
]