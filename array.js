//Store multiple values with array
var arr = ["JavaScript","ES6",12345];
console.log("Single Array:",arr);

//Nested Array
var array = [["Black",1],["White",2],["Brown",3]];
console.log("Nested Array:",array);

//Access Array using Index
var myArray = [11,12,13,14,15];
console.log("Array Before Modification:",myArray);
console.log("Index 0:",myArray[0]);
console.log("Index 3:",myArray[3]);

//Modifing the array
myArray[0] = 21;
myArray[3] = 33;
console.log("Array After Modification:",myArray);
console.log("Index 0:",myArray[0]);
console.log("Index 3:",myArray[3]);

//Multi Dimensional Array
var myArr = [[11,12,13],[14,15],[16,17,18,19],[20]];
console.log(myArr[0][2]);
console.log(myArr[1][0]);
console.log(myArr[2][2]);
console.log(myArr[3][0]);

//Push and Pop fuction
//Push
var a = ["Santosh"];
console.log(a);
a.push("First Rose");
console.log(a);
a.push("Second Snake");
console.log(a);
a.push("Now No one");
console.log(a);
//Pop
a.pop();
console.log(a);
a.pop();
console.log(a);
a.pop();
console.log(a,"\n");

//Shift and Unshift function
//Unshift
var abc = ["Santosh"];
console.log(abc);
abc.unshift("First Rose");
console.log(abc);
abc.unshift("Second Snake");
console.log(abc);
abc.unshift("No more");
console.log(abc);

//Shift
abc.shift();
console.log(abc);
abc.shift();
console.log(abc);
abc.shift(abc);
console.log(abc);