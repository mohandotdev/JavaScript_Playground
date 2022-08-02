//arrow function with paramaters
const concat = (arr1,arr2) => arr1.concat(arr2);
console.log(concat([1,2,3],[4,5,6,7]));

/* Higher order arrow function
JavaScript treats functions as objects and allow us to pass functions as 
parameter to another function and even return functions from other functions
*/
const realnumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => 
{
    const squaredInteger = arr.filter(num => Number.isInteger(num) && num>0).map(x => x = x*x);
    return squaredInteger
}
const squaredInteger = squareList(realnumberArray);
console.log(squaredInteger);

const increment =(function()
{
    return (number, value = 1) => number + value;
})();
console.log(increment(5,2));
console.log(increment(5));

//Rest operator (...) --> convert every value in one array
const sum = (function()
{
    return function sum(...args)
    {
        return args.reduce((a,b) => a + b, 0);
    };
})();
console.log(sum(1,2,3,4,5));

/* Spread operator same as rest operator(...) but it exapnds an already existing
array or it spreads out an array */
const arr1 = ['JAN','FEB','MAR','APR','MAY'];
let arr2;
(function()
{
    arr2 = [...arr1];
    arr1[0] = 'potato';
})();
console.log(arr2);
console.log(arr1);