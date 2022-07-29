//Object for lookup
function Lookup(val)
{
    var result = "";
    var lookup =
    {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    };
    result = lookup[val];
    return result;
}
console.log(Lookup("charlie"));
console.log(Lookup("delta"));

//Testing Objects for Properties
var myObj=
{
    name: "Kratos",
    wife: "Faye",
    son: "Atreus",
}
function checkObj(checkProp)
{
    if(myObj.hasOwnProperty(checkProp))
    {
        return myObj[checkProp];
    }
    else
    {
        return "Not Found";
    }
}
console.log(checkObj("name"));
console.log(checkObj("son"));
console.log(checkObj("villan"));

//Manipulating Complex object
//Using object we can store flexible data like number,string,array etc\
var myMusic = 
[
    {
        "artist": "Imagine Dragon",
        "song": "Radioactive",
        "Released_Year": 2012,
        "Platform": ["YouTube","Spotify"]
    },
    {
        "artist": "Imagine Dragon",
        "song": "Whatever It Takes",
        "Released_Year": 2017,
        "Plotform": ["YouTube","Spotify"]
    }
];

//Accessing the nested object
var myStorage =
{
    "car":
    {
        "inside":
        {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside":
        {
            "trunk": "jack"
        }
    }
}
var gloveBoxContent = myStorage.car.inside["glove box"];
console.log(gloveBoxContent);
console.log(myStorage.car.outside["trunk"]);

//Nested Arrays
var myPlants =
[
    {
        type: "flower",
        list:["rose","tulip","dandelion"]
    },
    {
        type: "trees",
        list: ["fir","pine","birch"]
    }
];
console.log(myPlants[0].type);
console.log(myPlants[1].list);