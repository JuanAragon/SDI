//alert("JavaScript works!");

////Problem 1
//
//var returnedResult;
//var emailContainer;
//
//
//function checkedString (argumentString){
//
//    var checkedDot;
//    var checkedSpace;
//    var checkedAt;
//    var result;
//    var checkedMoreAts;
//
//    //Methods
//    checkedDot = argumentString.lastIndexOf(".");
//    checkedSpace = argumentString.indexOf(" ");
//    checkedAt = argumentString.indexOf("@");
//    checkedMoreAts = argumentString.lastIndexOf("@");
//
//    if( (checkedDot >= 0) && (checkedSpace == -1) && (checkedAt >= 0) && (checkedMoreAts == checkedAt) && (checkedDot > checkedMoreAts)){
//
//        result = "This is a correct email";
//    }else{
//
//        result = "This is not an email";
//    }
//
//return result;
//
//}
////Main code
//emailContainer = prompt(" Type your email", "variable@hotmail.com");
//returnedResult = checkedString(emailContainer);
//console.log(returnedResult);


//Problem 2
var firstString = "cellphone-keys-wallet-earphones ";
var secondString = "-";
var thirdString = ",";
var returnedValue;

function firstValue(stringArgument, separatedArgument, newSeparatedArgument){


    //Local variables
    var newString;
    var newVariable = "";

    //Method
    newString = stringArgument.split(separatedArgument);

    //For Statement
    for(var i = 0; i < newString.length; i++){

        if(i === newString.length -1){

            newVariable = newVariable + newString[i];
        }else {

            newVariable = newVariable + newString[i] + newSeparatedArgument;

        }


    }

    return newVariable;

}
//Main Code
returnedValue = firstValue(firstString,secondString,thirdString);
console.log("Before I go to school, I take my " + returnedValue + ".");





