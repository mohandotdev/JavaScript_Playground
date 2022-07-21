//Finding length of the string
var nameLength = 0;
var Name = "Lovelace";
nameLength = Name.length;
console.log(nameLength);

var Namelength = 0;
var myNameLength = "MohanasundaramK";
Namelength = myNameLength.length;
console.log(Namelength);

//Finding the character in string using bracket notation
var firstletterofFirstName = "";
var firstletterofSecondName = "";
var FullName = "Ada Lovelace";
firstletterofFirstName = FullName[0];
firstletterofSecondName = FullName[4];
console.log(firstletterofFirstName + " " + firstletterofSecondName);

var testName = "Ada Lovelace";
var lastletteroftestName = testName[testName.length-1];
console.log(lastletteroftestName);

/*String Immutability

We can't alter the string once created
Example:
var str = "jello World";
str[0] = "H";
console.log(str);  -------> Nothing happens remains unchanged
*/

//Alternate method to alter the string
var myStr = "Jello World";
myStr = "Hello World";
console.log(myStr);