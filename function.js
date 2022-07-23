  //Code Reusable with function
function ReusableFunction()
{
    console.log("Hello JavaScript");
}
ReusableFunction();
ReusableFunction();
ReusableFunction();

//Passing values to the function
function addNumber(a,b)
{
    console.log(a+b);
}
function subNumber(a,b)
{
    console.log(a-b);
}
addNumber(10,5);
subNumber(67,12);

//Global vs Local Scope in functions
var OuterWear = "T-Shirt"; //  ----> Global
function myOutfit()
{
    var OuterWear = "Sweater";  // ----> Local
    return OuterWear;
}
console.log(myOutfit());
console.log(OuterWear);

// Return a Value from a Function
function minusTenof(num)
{
    var minus = 10 - num;
    return minus;
}
function tenTimesof(num)
{
    var tenTimes = 10 * num;
    return tenTimes;
}
console.log(minusTenof(7));
console.log(tenTimesof(27));

//Assignment with returned function
var changed = 0;
function change(num)
{
    return((num+5)/3);
}
changed = change(10)
console.log(changed);

//Push element to an array using function
function nextInLine(arr,num)
{
    arr.push(num);
    return arr;
}
var arr = [1,2,3,4,5];
console.log("Before : ",JSON.stringify(arr));
nextInLine(arr,6);
console.log("After : ",JSON.stringify(arr));
var arr1 = [12,53,21,46,87];
console.log("\nBefore : ",JSON.stringify(arr1));
nextInLine(arr1,98);
console.log("After : ",JSON.stringify(arr1));