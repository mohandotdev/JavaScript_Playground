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

function range(num)
{
    if(num<10)
    {
        return "Lesser than 10";
    }
    else
    {
        return "Greater than 10";
    }
}
console.log(range(45))

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

//And / Or Operator
function andOperator(num)
{
    if(num>=25 && num<=50)
    {
        return "Yes";
    }
    return "No";
}
console.log(andOperator(47));

function OrOperator(num)
{
    if(num < 10 || num >20)
    {
        return "Outside";
    }
    return "Inside";
}
console.log(OrOperator(15));

//Golf game code  ------> Chained ifelse statement
/*
Strokes          Return
1             "Hole-in-one!"
<= par - 2    "Eagle"
par -1        "Birdie"
par           "Par"
par + 1       "Bogey"
par + 2       "Double Bogey"
>= par + 3    "Go Home!"
*/
var names = ["Hole-in-one!","Eagle","Birdie","Par","Bogey","Double Bogey","Go Home!"]
function golfScore(par,strokes)
{
    if(strokes == 1)
    {
        return names[0];
    }
    else if(strokes <= par -2)
    {
        return names[1];
    }
    else if(strokes == par - 1)
    {
        return names[2];
    }
    else if(strokes == par)
    {
        return names[3];
    }
    else if(strokes == par + 1)
    {
        return names[4];
    }
    else if(strokes == par + 2)
    {
        return names[5];
    }
    else if(strokes >= par + 3)
    {
        return names[6];
    }
    return "Change Me";
}
console.log(golfScore(5,4));