//alert("JavaScript works!");

var firstSet = [10, 6, 7, 3, 12, 5];
var secondSet = [25, 100, 4, 22, 16, 105, 2, 7];
var thirdSet = [2, 3, 4, 1, 10, 27, 32, 51, 6, 100, 8, 42];
var returnedArray = [];

function myPrincipalFunction(firstArgument){

    var newVariable;

    for (var a = 0; a < firstArgument.length; a ++) {

        for (var i = 0; i < firstArgument.length; i++) {

            if (firstArgument[i] > firstArgument[i + 1]) {

                newVariable = firstArgument [i];

                firstArgument[i] = firstArgument [i + 1];

                firstArgument [i + 1] = newVariable;


            }

        }
    }

//return firstArgument;
//}
//
//
////main code
//
//for (var b = 0; b < 3; b++) {
//
//    if (b === 0) {
//
//        returnedArray = myPrincipalFunction(firstSet);
//
//
//    } else if (b === 1) {
//
//        returnedArray = myPrincipalFunction(secondSet);
//
//
//    } else if (b === 2) {
//
//        returnedArray = myPrincipalFunction(thirdSet);
//
//    }
//
//    console.log("The correct order for the following set is: " + returnedArray)
//
//}


