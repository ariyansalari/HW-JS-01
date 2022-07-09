const number1=+prompt("enter your name [1] :");
const operator=prompt("enter your + - / * : ");
const number2=+prompt("Enter number[2] :");
let Result=0;
switch(operator)
{
case "+":
{
    Result=number1+number2;
    break;
}
case "-":
    {
        Result=number1-number2;
        break;
    }
    case "/":
        {
        Result=number1/number2;
        break;
        }
        case "*":
            {
                Result=number1*number2;
                break;
            }
            default:
                {
                alert("ERROR");
                console.log("ERROR");
                break;
                }

}
console.log("number[1] =" ,number1);
console.log(operator);
console.log("number[2] =",number2);
console.log("Result is =",Result);
alert(Result);
