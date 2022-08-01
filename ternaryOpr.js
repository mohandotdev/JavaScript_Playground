//Ternary operator is an one line ifelse expression
function checkEqual(a,b)
{
    return a === b ? true : false; // ---> example of ternary operator
/*              (or) 
simply it can be written as (return a === b;) */
}
console.log(checkEqual(5,10));
console.log(checkEqual(10,10));

//Multiple ternary operator
function checkSign(num)
{
    return num > 0 ? "Positive" : num < 0 ? "Negative": "Zero";
}
console.log(checkSign(67));
console.log(checkSign(-46));
console.log(checkSign(0));