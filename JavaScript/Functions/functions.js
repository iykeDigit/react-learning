//declaration vs expressions
//function declaration
function walk(){
    console.log("walk");
}

//Anonymous function expression
let run = function(){
    return "walk";
}

let move = run;

//ARGUMENTS

function sum(a,b){
    let total = 0;
    for(let value of arguments){
        total += value;
    }
    return total;
}

//console.log(sum(1,2,3,4,5));

//REST OPERATOR
function rest(discount, ...prices){
    let total = prices.reduce((a,b) => a+b);
    return total * (1-discount);
}

//console.log(rest(0.1, 20,30))


//DEFAULT PARAMETERS
function interest(principal,years, rate = 3.5){
    //rate = rate || 3.5;
    //years = years || 5;

    return principal * rate / 100 * years;
}

//console.log(interest(10000,5));

//GETTERS AND SETTERS
const person = {
    firstName: 'Mosh',
    lastName: 'Hamedani',
    get fullname(){
        return `${person.firstName} ${person.lastName}`
    },
    set fullname(value){
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};
//person.fullname = 'John Smith';
//console.log(person);

//ERROR HANDLING
const human = {
    firstName: 'Mosh',
    lastName: 'Hamedani',
    set fullName(value){
        if(typeof value !== 'string')
          throw new Error('Value is not a string.');
        
        const parts = value.split(' ');
        if(parts.length !== 2){
            throw new Error('value is empty');
        }
        this.firstName = parts[0];
        this.lastName = parts[1];  
    }
};

try{
    human.fullName = '';
}
catch(e){
    //alert(e);
}

//console.log(human);

//THE THIS KEY WORD
//method => obj
const video = {
    title: 'a',
    play(){
        console.log(this);
    }
};

video.stop = function(){
    console.log(this)
}

//function => global
function playVideo(){
    console.log(this);
}

//constructor => new empty object
function Video(title){
    this.title = title;
    console.log(this);
}

//call back function => window object
const video_two = {
    title: 'a',
    tags: ['a','b','c'],
    showTags(){
        this.tags.forEach(function(tag){
            console.log(this.title, tag);
        }, this)
    }
};

//video_two.showTags();

//CHAINING THIS
const video_three = {
    title: 'a',
    tags: ['a','b','c'],
    showTags(){
        const self = this;
        this.tags.forEach(function(tag){
            console.log(self.title, tag);
        })
    }
};

//video_three.showTags();

function playVideo(a,b){
    console.log(this);
}

//playVideo.call({ name: 'Mosh'}, 1,2);
//playVideo.apply({name: 'Mosh'}, [1,2]);
//playVideo.bind({name: 'Mosh'})();

//BIND()
const bind = {
    title: 'a',
    tags: ['a','b','c'],
    showTags(){
        this.tags.forEach(function(tag){
            console.log(this.title, tag);
        }.bind(this));
    }
};

//arrow functions
const arrow = {
    title: 'a',
    tags: ['a','b','c'],
    showTags(){
        this.tags.forEach(tag =>{
            console.log(this.title, tag);
        });
    }
};
arrow.showTags();