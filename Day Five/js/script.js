/**
 * Created by juanfranaragondaza on 5/14/15.
 */

//alert ("JavaScript works!");


// Example
//var foo= 1;
//var bar = 2;
//var baz = 3;
//
//console.log(foo + " " + bar + " " + baz);







// Fun with functions!

// Global variables
var globalName = "Bob";
var returnedValueVariable;
var checkedName

// functions
function nameFetcher() {

    var myName = prompt ("Enter your name: ", "Juan");

    return myName;

}

function nameChecker (nameArgument){

    var trueName;

    if (nameArgument === "Optimus"){
        trueName = true;
    }else{
        trueName = false;
    }

    return trueName;

}

// Main code

returnedValueVariable = nameFetcher()

checkedName = nameChecker(returnedValueVariable);

if (checkedName){
    console.log("Greetings and welcome!");
} else {
    console.log("Intruder alert!");
}


















//Problem 1
//var fullPrice = 12;
//var discount = 5;
//var age;
//
//age = parseInt (prompt("Enter the customer's age: "));
//if (age >= 55|| age < 10){
//    console.log("Your discount price is $" + (fullPrice - discount) + ".");
//} else {
//    console.log("No discount for you. Please pay $" + fullPrice + ".";
//}

//Problem 2

//tire variables
//var frontRight = parseFloat (prompt("Enter the PSI for the front right tire: "));
//var frontLeft = parseFloat (prompt("Enter the PSI for the front left tire: "));
//var rearRight = parseFloat (prompt("Enter the PSI for the rear right tire: "));
//var rearLeft = parseFloat (prompt("Enter the PSI for the rear left tire: "));
//
//if(frontRight === frontLeft && rearRight === rearLeft){
//   console.log("Your tire pressures are equal in the front and equal in the rear.");
//
//}else{
//    console.log("There is a problem with your tire pressure. Please check them ");
//}
//
////Problem 2 alternative
//
//var frontRight;
//var frontLeft;
//var rearRight;
//var rearLeft;
//var tirePressure;
//var tireLocation;
//
//for (var i = 0; i < 4; i++)
//
//if (i === 0){
//    //first time trough the loop
//    tireLocation = "front right";
//} else if (i === 1){
//    //second time trough the loop
//    tireLocation = "front left";
//} else if (i === 2){
//    //third time trough the loop
//    tireLocation = "rear right";
//} else {
//    //fourth time trough the loop
//    tireLocation = "rear left";
//}
//
//tirePressure = parseFloat(prompt("What is the tire pressure of the " + tireLocation + " tire"));
//
//if (i === 0){
//    //first time trough the loop
//    frontRight = tirePressure;
//} else if (i === 1){
//    //second time trough the loop
//    frontLeft = tirePressure;
//} else if (i === 2){
//    //third time trough the loop
//    rearRight = tirePressure;
//} else {
//    //fourth time trough the loop
//    rearLeft = tirePressure;
//}
//
//if (frontRight === frontLeft && rearRight === rearLeft){
//    console.log("The tire pressures are good to go!");
//} else {
//    console.log("The tire pressures need to be checked.");
//}


