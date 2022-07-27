//Switch Case Statement
function switchInCase(val)
{
    var answer ="";
    switch(val)
    {
        case 1:
            answer = "Alpha";
            break;
        case 2:
            answer = "Beta";
            break;
        case 3:
            answer = "Gamma";
            break;
        case 4:
            answer = "Delta";
            break;
        case "William":
            answer = "William Butcher";
            break;
        default:
            answer = "Enter number between 1 - 4"
    }
    return answer;
}
console.log(switchInCase(1));
console.log(switchInCase(3));
console.log(switchInCase(6));
console.log(switchInCase("William"));