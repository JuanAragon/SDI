/**
 * Created by juanfranaragondaza on 5/14/15.
 */

//Global Variables
var numberOne = parseFloat(prompt("Please enter a number: "));
var numberTwo = parseFloat(prompt("Please enter a number: "));
var typeOfOperations = prompt("Please enter the type of operation: +, -, *, / ");
var resultOperations;

function addition(){

    //addition

    resultOperations = (numberOne + numberTwo);

    return resultOperations;
}