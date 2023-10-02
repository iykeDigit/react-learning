function createCircle(parameter){
    return {
        radius: parameter,
        draw(){
            console.log('draw');
        }
    };
}

function createSquare(length)
{
    return {
        length,
        draw(){
            console.log('This is a square');
        } 
    };
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);

const square = createSquare(3);
square.draw();
