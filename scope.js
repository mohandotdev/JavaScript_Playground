//Global Scope
var myGlobal = 10;
function fun1()
{
    oopsGlobal = 5;
}
function fun2()
{
    var output = "";
    if(typeof myGlobal != "undefined")
    {
        output += "myGlobal:" + myGlobal;
    }
    if(typeof oopsGlobal != "undefined")
    {
        output += "\noopsGlobal:" + oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();

//Local Scope
function myLocalScope()
{
    var myVar = 2000;
    console.log(myVar);
}
myLocalScope(); // It will call the function and print the myVar value
console.log(myVar); // -----> Throw Error because we declare myVar in local Scope