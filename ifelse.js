//if-else statement
function trueOrfalse(isItTrue)
{
    if(isItTrue)
    {
        return "Yes, it was true.";
    }
    return "No, it was false.";
}
console.log(trueOrfalse(true));

//Equality operator
function testEqual(num)
{
    if(num == 100)
    {
        return "Equal";
    }
    return "Not Equal";
}
console.log(testEqual(99));

//Strict Equality operator  
function equality(a,b)
{
    if(a==b)      //  ---> Here the == automatically converts the string '10' to 10 int datatypes for comparision
    {
        return "Equal";
    }
    return "NotEqual";
}
function strictEquality(a,b)
{
    if(a===b)         //  ---> Does not convert the data type to compare, it strictly follows the rule 
    {
        return "Equal";
    }
    return "Not Equal";
}
console.log(equality(10,'10'))
console.log(strictEquality(10,'10'));