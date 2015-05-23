//alert("JavaScript works!");

// Global Variables
// Problem 1 variables
var firstNumber = 5.1889664497874784477478;
var secondNumber = 3;
var returnValue;
//Problem 2 variables
var firstVariable = "178273678262";
var returnResult;
//Problem 3 variables
var firstDate = "03/20/2015";
var secondDate = "03/20/2016";
var daysOrHours = prompt("Please enter the word hour or the word date");


// function problem 1
function firstValue(num1, num2){

    num1 = num1.toFixed(num2);

    return num1;

}

// function problem 2
function convertToNumber(stringArg){

    var result

    if(isNaN(stringArg)){

        result = console.log("This is not a number");

    } else {

        result = parseFloat(stringArg)

    }

    return result;
}

// function problem 3

function convertDate(dateOne, dateTwo){

    var dateFirst = new Date(dateOne);
    var dateSecond = new Date(dateTwo);

    dateDiff = dateFirst - dateSecond;

    if (daysOrHours === "hour") {

        dateDiff = Math.abs(dateDiff / 1000 / 60 / 60 );

    } else if( daysOrHours === "day"){

        dateDiff = Math.abs(dateDiff / 1000 / 60 / 60 / 24);

    }

     return dateDiff;

    }


//Main Code

//Problem 1
returnValue = firstValue(firstNumber, secondNumber);
console.log(returnValue);
console.log("The number " + firstNumber + " with 3 specified numbers is " + returnValue);

//Problem 2
returnResult = convertToNumber(firstVariable);
console.log(returnResult);
console.log("The string was converted to the number " + returnResult);

//Problem 3
returnDate = convertDate(firstDate, secondDate);
console.log(returnDate);



