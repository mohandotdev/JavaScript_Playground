//Returning Boolean value form function
function isLessthan(a,b)
{
    return a<b;
}
console.log(isLessthan(10,15));
console.log(isLessthan(15,10));

//Early return pattern for function
function abTest(a,b)
{
    if(a < 0 || b < 0)
    {
        return "Undefined";
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b),2));
}
console.log(abTest(2,2));
console.log(abTest(10,15));
console.log(abTest(-10,20));