//Mutate an array declared with const
const s =[5,7,9];
function editS()
{
    "use strict";
    // s = [3,5,7,9]; ---> throws an error that s is "read only"
    s[0] = 3;
    s[1] = 5;
    s[2] = 7;
    s[3] = 9;
}
editS();
console.log(s);

/* We can change the const value, a const declaration alone doesn't
protect your data from mutation. so, we gone a use Object.freeze to
prevent data from mutation*/

// Object.freeze() ---> method freezes an object
function freezeObj()
{
    "use strict";
    const MATH_CONSTANTS =
    {
        PI: 3.14
    };
    Object.freeze(MATH_CONSTANTS); //---> if this method is not used then the output will be '99'
    try
    {
         MATH_CONSTANTS.PI = 99;
    }
    catch(ex)
    {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
console.log(PI);