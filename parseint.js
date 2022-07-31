//convert string to integer using parseInt function
function convertToInt(str)
{
    return parseInt(str);
}
console.log(convertToInt("56"));

//parseInt function can also use with a radix
//Here radix specifices the base of the string

//Binary to Integer
function convertToInteger(str)
{
    return parseInt(str, 2); // 2 --> Base number(radix)
}
console.log(convertToInteger("10011"));