/* var vs let
var: we can declare the same variable any number of times using 'var'

var name = "mohan";
var name = "mohan_k";

In the above example we use 'var' to create the variable but we want to update
the variable. We again use 'var' to make change. Here,'var' again create the new variable 
and store value again. So, two declaration have made to make changes.

For this sake 'let' was introduced in ES6 Version
let: 'let' does not let you to declare a variable twice

let name = "mohan";
name = "mohan_k"; 

In the above example we use 'let' to create the variable but we need to update it.
Here, we simply mentioning the variable name and assigning the new value. No need 
for the use of 'let' keyword again.
*/

//Scopes of var and let keywords
// var:
function checkScope()
{
    "use strict"; // ---> enable strict mode to catch coding mistakes
    var i = "fuction scope";
    if(true)
    {
        var i = "block scope";
        console.log("Block scope i is",i);
    }
    console.log("Fuction scope i is",i);
}
checkScope();

// let:
function checkScope1()
{
    "use strict";
    let j = "function scope";
    if(true)
    {
        let j = "block scope";
        console.log("Block scope j is",j);
    }
    console.log("Function scope j is",j);
}
checkScope1();