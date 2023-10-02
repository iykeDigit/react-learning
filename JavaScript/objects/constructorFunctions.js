const circle = {
    radius: 1
};

circle.color = 'yellow';
circle.draw = function(){}
delete circle.draw;
delete circle.color;
circle = {};

console.log(circle);