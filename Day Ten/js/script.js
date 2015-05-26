/**
 * Created by juanfranaragondaza on 5/26/15.
 */
//alert ("JavaScript Works !");

// Problem Solving 2
// Global Variables
var numArray = [3, 6, 7, 9, 23, 42, 22, 50, 34];
var currentNum = 12;
var returnedNumber;

//function
function findNumber (argArray, argNumber){

    //local variables
    var nextGreatest = 0;
    argArray = argArray.sort();
    console.log(argArray);

    for (var i = 0; i < argArray.length; i ++){

        if(argNumber < argArray[i]){

            return argArray[i];

        }

    }

    return nextGreatest;
}


//Main code
returnedNumber = findNumber(numArray, currentNum);
console.log("The next highest number is " + returnedNumber);


















// Problem Solving 1
// Global Variables
//var returnedNumber;
//
////functions
//function yearsBetween(){
//
//    //local variable
//    var yearEntered = parseInt(prompt("What year would you like to use"));
//
//    var today = new Date();
//
//    today = today.getFullYear();
//
//    var difference = today - yearEntered;
//
//    return difference;
//
//}
//
////Main Code
//returnedNumber = yearsBetween();
//console.log("The difference in years is " + returnedNumber);























//Global Variables
//Problem 1 variables
//var firstNumber = prompt("Please enter a number to be converted: ");
//var returnedNumber;

//Problem 2 variables
//var numToFormat = parseFloat(prompt("Enter a number to format: "));
//var numOfDecimals = parseInt(prompt("Enter the number of decimal places:"));

//Problem 3 variables
//var dateOne = new Date("5/23/2105");
//var dateTwo = new Date("5/23/2012");
//var hOrD = "hours";
//
////Problem functions
//
////Problem 1 function: format a number to a certain number of decimal places
//function decFormat(argNumber, decPlaces){
//
//    return argNumber.toFixed(decPlaces);
//}
//
////Problem 2 function: convert a string to a number
//function convertNumber(argNumber){
//
//    //if user did not enter a number, ask again
//    while(isNaN(argNumber)){
//
//        argNumber = prompt("No, I said enter a number: ");
//    }
//
//    return parseFloat(argNumber);
//}
//
////Problem 3 : Find the hours or days between two dates
//function dateDiff(firstDate, secondDate, hoursOrDays){
//
//    var difference = Math.abs(firstDate - secondDate);
//
//    if (hoursOrDays === "hours"){
//
//        difference = Math.round(difference/1000/60/60);
//
//
//    }else{
//
//        difference = Math.round(difference/1000/60/60/24);
//
//
//    }
//
//    return difference
//
//
//}


//Main code

////problem 2 function call
//returnedNumber = convertNumber(firstNumber);
//console.log("The returned number is " , returnedNumber);
//
////problem 1 function call
//returnedNumber = decFormat(numToFormat,numOfDecimals);
//console.log("The formatted number is", returnedNumber);

//problem 3 function call
//returnedNumber = dateDiff(dateOne,dateTwo,hOrD);
//console.log("The difference in " + hOrD + " between " + dateOne.toDateString() + " and " + dateTwo + " is " + returnedNumber);


