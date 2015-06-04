//alert("JavaScript works!");

//Global Variables
//var returnedAnswer;
var resultNumber;
var numberPrompt = prompt("Please choose between this two options : Powerball or Florida Lottery");

function lotteryOptions(argNumber){

    //Local variable
    var returnEqual = [];

    //If for Powerball
    if (argNumber === "Powerball"){

        for(var i = 0; i < 5; i++) {

            returnEqual.push(Math.round(Math.random() * (59 - 1) + 1));
        }

        returnEqual.push(Math.round(Math.random() * (35 - 1) + 1));

    }

    //If for Florida Lottery
    if (argNumber === "Florida Lottery"){

        for(var i = 0; i < 6; i++){

            returnEqual.push(Math.round(Math.random() * (53 - 1) + 1));
        }
    }

    return returnEqual;

}

//Main Code
//returnedAnswer = lotteryOptions(numberPrompt);

if(numberPrompt === "Powerball"){
    resultNumber = returnedAnswer.pop();
    console.log("Your 'QuickPick' chosen numbers for the Powerball are: " + lotteryOptions(numberPrompt) + " with a Powerball of " + resultNumber);

}else if(numberPrompt === "Florida Lottery"){

    console.log("Your 'QuickPick' chosen numbers for the Florida Lottery are: " + lotteryOptions(numberPrompt));
}