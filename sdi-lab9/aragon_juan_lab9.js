//alert("JavaScript works!");

//Problem 1
var firstNumber = 5.1889664497874784477478
var secondNumber = 3
var returnValue;

function firstValue(num1, num2){

    num1 = num1.toFixed(num2);

    return num1;

}

returnValue = firstValue(firstNumber, secondNumber);

console.log(returnValue);

console.log("The number " + firstNumber + " with 3 specified numbers is " + returnValue);