//  NAME:  Enter your name here
//  DATE:  Enter the current date
// Scalable Data Infrastructures
// Day 4 Lab
//  Assignment 1
//  Using logical operators

//var p;
//var q;
//var r;
//

//// first table
//p = confirm("First value:  Click OK for true or Cancel for false.");
//q = confirm("Second value:  Click OK for true or Cancel for false.");
//
//if (p && q) {
//    console.log("With " + p + " and " + q + ", the outcome is TRUE.");
//} else {
//    console.log("With " + p + " and " + q + ", the outcome is FALSE.");
//}



//// second table
//p = confirm("First value:  Click OK for true or Cancel for false.");
//q = confirm("Second value:  Click OK for true or Cancel for false.");
//
//if (p || q) {
//    console.log("With " + p + " and " + q + ", the outcome is TRUE.");
//} else {
//    console.log("With " + p + " and " + q + ", the outcome is FALSE.");
//}



//// third table
//p = confirm("First value:  Click OK for true or Cancel for false.");
//q = confirm("Second value:  Click OK for true or Cancel for false.");
//r = confirm("Third value: Click OK for true or Cancel for false.");
//
//if (p && (q ||r)) {
//    console.log("With " + p + " and " + q + " and " + r + ", the outcome is TRUE.");
//} else {
//    console.log("With " + p + " and " + q + " and " + r + ", the outcome is FALSE.");
//}



//// forth table
//p = confirm("First value:  Click OK for true or Cancel for false.");
//q = confirm("Second value:  Click OK for true or Cancel for false.");
//r = confirm("Third value: Click OK for true or Cancel for false.");
//
//if ((p && !q)||r) {
//    console.log("With " + p + " and " + q + " and " + r + ", the outcome is TRUE.");
//} else {
//    console.log("With " + p + " and " + q + " and " + r + ", the outcome is FALSE.");
//}



////fifth table
//p = confirm("First value:  Click OK for true or Cancel for false.");
//q = confirm("Second value:  Click OK for true or Cancel for false.");
//r = confirm("Third value: Click OK for true or Cancel for false.");
//
//if (p || (q||r)) {
//    console.log("With " + p + " and " + q + " and " + r + ", the outcome is TRUE.");
//} else {
//    console.log("With " + p + " and " + q + " and " + r + ", the outcome is FALSE.");
//}

////Problem 1
//
//var ticketPrice = 12;
//var yourAge;
//
//yourAge = prompt ("Enter your age");
//
//if (yourAge >= 55 || yourAge <= 10 ) {
//
//    console.log (" You have to pay 5 dollars");
//
//}else{
//
//    console.log (" You have to pay " + ticketPrice + " dollars");
//}


//Problem 2

var tireOne;
var tireTwo;
var tireThree;
var tireFour;

//prompts
//ask what is the pressure for tire one
//ask what is the pressure for tire two
//ask what is the pressure for tire three
//ask what is the pressure for tire four

tireOne = prompt (" Enter the pressure for tire one ");
tireTwo = prompt (" Enter the pressure for tire two ");
tireThree = prompt (" Enter the pressure for tire three ");
tireFour = prompt (" Enter the pressure for tire four");

if (tireOne === tireTwo || tireThree === tireFour){
    console.log( "That's the correct pressure")
}else{
    console.log( "You have to go to the mechanic")
}







