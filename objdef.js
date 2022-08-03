//Write concise object literal declarations using simple fields
const createPerson = (name, age, gender) => ({name, age, gender});
console.log(createPerson("Butcher", 45,"male"));

//Write concise declarative function
const bicycle =
{
    gear: 2,
    setGear(newGear)
    {
        "use strict";
        this.gear = newGear;
    }
};
bicycle.setGear(6);
console.log(bicycle.gear);

//Using class and constructor keyword to create an object
class SpaceShuttle
{
    constructor(targetPlanet)
    {
        this.targetPlanet = targetPlanet;
    }
}
var zeus = new SpaceShuttle('Jupiter');
console.log(zeus.targetPlanet);

/*----------------------------------------------------------------- */
function makeClass()
{
    class Vegetable
    {
        constructor(name)
        {
            this.name = name;
        }
    }
    return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable("carrot");
console.log(carrot.name);