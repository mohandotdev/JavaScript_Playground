//Method to build an object
var myDog =
{
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "Friends": ["Everyone!"]
};

//Using Dot notation to access a property of an object
var testObj =
{
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};
var hatvalue = testObj.hat;
var shirtValue = testObj.shirt;
console.log(hatvalue);
console.log(shirtValue);

//Using Dot notation to access a property of an object
var dogName = myDog["name"];
var dogFriends = myDog["Friends"];
console.log(dogName);
console.log(dogFriends);

//Using variables to access a property of an object
var myPlyr =
{
    1: "Homelander",
    2: "Billy Butcher",
    3: "Hughie Campbell"
};
var playerNumber = 1;
var player = myPlyr[playerNumber];
console.log(player);
playerNumber = 2;
console.log(myPlyr[playerNumber]);
playerNumber = 3;
console.log(myPlyr[playerNumber]);

//Use dot notation to update an object
var assassin =
{
    "name": "Wick",
    "age": 40,
    "fav.weapon": "German semi-automatic pistol Heckler & Koch P30L",
    "kills": "Aprx 300 people"
};
console.log(assassin["name"]);
assassin.name = "John Wick";
console.log(assassin["name"]);
console.log(assassin["kills"]);

//We can use dot or bracket notation to add new properties to object
assassin.nickname = "Baba Yaga";  //  ------> dot notation
assassin["moral"] = "LIVE BY RULES";  // -------> bracket notation
console.log(assassin["nickname"]);
console.log(assassin["moral"]);

//To delete properties of an object
delete assassin.moral;
console.log(assassin["moral"]);