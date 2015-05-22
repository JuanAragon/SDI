//alert("JavaScript works!");

//Problem 1

var returnedResult;
var emailContainer;


function checkedString (argumentString){

    var checkedDot;
    var checkedSpace;
    var checkedAt;
    var result;
    var checkedMoreAts;

    //Methods
    checkedDot = argumentString.lastIndexOf(".");
    checkedSpace = argumentString.indexOf(" ");
    checkedAt = argumentString.indexOf("@");
    checkedMoreAts = argumentString.lastIndexOf("@");

    if( (checkedDot >= 0) && (checkedSpace == -1) && (checkedAt >= 0) && (checkedMoreAts == checkedAt) && (checkedDot > checkedMoreAts)){

        result = "This is a correct email";
    }else{

        result = "This is not an email";
    }

return result;

}
//Main code
emailContainer = prompt(" Type your email", "variable@hotmail.com");
returnedResult = checkedString(emailContainer);
console.log(returnedResult);