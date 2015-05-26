//alert("JavaScript works!");

//Global Variables
var returnedAnswer;
var resultNumber;
var numberPrompt = prompt("Please choose between this two options : Powerball or Florida Lottery");

function LotteryOptions(argNumber){

    var returnAnswer = [];

    //If for Powerball
    if (argNumber === "PowerBall"){

        for(var i = 0; i < 5; i++) {

            returnAnswer.push(Math.round(Math.random() * (59 - 1) + 1));
        }

        returnAnswer.push(Math.round(Math.random() * (35-1) + 1));

    }
}