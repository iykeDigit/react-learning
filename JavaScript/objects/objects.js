const circle = {
    radius: 1,
    location: {
        x:1,
        y:1,
    },
    isVisible: true,
    draw: function(){
        console.log('draw');
    }
};


let m = circle.location.x;
console.log(m);