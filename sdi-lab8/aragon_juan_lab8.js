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

    var newString;
    var newVariable;

    newString = stringArgument.split(separatedArgument);

    for(var i = 0; i < newString.length; i++){

        
    }

    return newString

}
returnedValue = firstValue(firstString,secondString,thirdString);
console.log(returnedValue);




