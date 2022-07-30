//While loop
var myArray = [];
var i = 0;
while(i<5)
{
    myArray.push(i);
    i++;
}
console.log(myArray);

//For loop
var Array = [];
for(var i=0;i<10;i++)
{
    Array.push(i);
}
console.log(Array);

//Iterate odd numbers to array using loop
var oddArray = [];
for(var i=1;i<15;i+=2)
{
    oddArray.push(i);
}
console.log(oddArray);

//Add all numbers in an array
var Array1 = [9,56,32,45,9];
var total = 0;
for(var i=0;i<Array1.length;i++)
{
    total += Array1[i];
}
console.log(total);

//Nested loop
function multiplyall(arr)
{
    var product = 1;
    for(var i=0;i<arr.length;i++)
    {
        for(var j=0;j<arr[i].length;j++)
        {
            product *= arr[i][j];
        }
    }
    return product;
}
var product = multiplyall([[1,2],[3,4],[5,6,7]]);
console.log(product)

//Do while loop
var myArray1 = [];
var i = 10;
do
{
    myArray1.push(i);
    i++;
}
while(i<5)
console.log(i, myArray1);