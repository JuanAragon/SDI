//alert("JavaScript works!");

//Global Variables

var numberOne = parseFloat(prompt("Please enter a number: "));
var numberTwo = parseFloat(prompt("Please enter a number: "));
var typeOfOperations = prompt("Please enter the type of operation: +, -, *, / ");
var resultOperations;

//functions

function addition(numberOne, numberTwo){

    //addition

    resultOperations = (numberOne + numberTwo);

    return resultOperations;
}

function subtraction(numberOne,numberTwo){

    //subtraction

    resultOperations = (numberOne - numberTwo);

    return resultOperations;
}

function multiplication(numberOne,numberTwo){

    //multiplication

    resultOperations = (numberOne * numberTwo);

    return resultOperations;
}

function division(numberOne,numberTwo){

    //division

    resultOperations = (numberOne / numberTwo);

    return resultOperations;
}

// Main code

if (typeOfOperations === "+") {

    resultOperations = addition(numberOne,numberTwo);

    console.log("The result for the addition is: " + resultOperations + "")

} else if(typeOfOperations === "-"){

    resultOperations = subtraction(numberOne,numberTwo);

    console.log("The result for the subtraction is: " + resultOperations + "")

} else if(typeOfOperations === "*"){

    resultOperations = multiplication(numberOne,numberTwo);

    console.log("The result for the multiplication is: " + resultOperations + "")

} else if(typeOfOperations === "/") {

    if(numberOne === 0 || numberTwo === 0) {

        console.log("Division can't me made")

    } else {

        resultOperations = division(numberOne, numberTwo);

        console.log("The result for the division is: " + resultOperations + "")
    }
}else{

    console.log("Operation can't be done, please try again");
}





