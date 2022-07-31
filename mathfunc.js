//Generate random fraction number using Math function
function randomFraction()
{
    return Math.random();
}
console.log(randomFraction());

//Generate random whole number using Math function
function randomWholenum()
{
    return Math.floor(Math.random() * 10); // --> random num from 0 - 9
}
console.log(randomWholenum());

//Generate random whole number within a range
function randomRange(min,max)
{
    return Math.floor((Math.random() * (max-min+1)) + min);
}
console.log(randomRange(5,20));