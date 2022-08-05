 //Create strings using template literals
const person =
{
    name: "William Butcher",
    age: "45"
};
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;
console.log(greeting);

const result =
{
    success:["max-length","no-amd","prefer-arrow-functions"],
    failure:["no-var","var-on-top","linebreak"],
    skipped:["id-blacklist","no-dup-keys"]
};
function makeList(arr)
{
    const displayArray = [];
    for(let i=0;i<arr.length;i++)
    {
        displayArray.push(`<li class="text-warning">${arr[i]}</li>`);
    }
    return displayArray;
}
const resultArray = makeList(result.failure);
const resultArray1 = makeList(result.success);
console.log(resultArray);
console.log(resultArray1);