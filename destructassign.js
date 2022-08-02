//Destruction assignment
var value = {x:3.6, y:7.4, z:6.54};

var x = value.x;
var y = value.y;
var z = value.z;
console.log(x,y,z);

//The above code can be written in one line using destruction assignment
const {x : l, y : m, z : n} = value;
console.log(l,m,n);

const AVG_TEMPERATURES =
{
    today : 77.5,
    tomorrow : 79
}
function getTempOfTmrw(avgTemperatures)
{
    "use strict";
    const {tomorrow : tempOfTomorrow} = avgTemperatures;
    return tempOfTomorrow;
}
console.log("Temp of tomorrow:"+ " " + getTempOfTmrw(AVG_TEMPERATURES));

//Destruction assignment with nested objects
const LOCAL_FORECAST =
{
    today:{min: 72, max: 83},
    tomorrow:{min: 73.5, max: 84.6}
};
function getMaxOfTmrw(localForecast)
{
    "use strict";
    const {tomorrow :{max : maxoftmrw}} = localForecast;
    return maxoftmrw;
}
console.log(getMaxOfTmrw(LOCAL_FORECAST));

//Use destruction assignment to assign variables from arrays
const [e,f, ,g] = [1,2,3,4,5];
console.log(e,f,g);

let num1 = 45, num2 = 67;
(() =>{
    "use strict";
    [num1,num2] = [num2,num1];
})();
console.log(num1+" "+num2);

//Use destruction assignment with the rest operator
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list)
{
    const [ , , ...arr] = list;
    return arr;
}
const arr = removeFirstTwo(source);
console.log(source);
console.log(arr);

//Use destruction assignment to pass an object as a function's parameters
const stats =
{
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
const half =(function()
{
    return function half({max,min})
    {
        return (max+min) / 2.0;    
    }
})();
console.log(stats);
console.log(half(stats));