//alert("JavaScript works!");

var returnedResult;
var emailContainer;


function checkedString (argumentString){

    var checkedDot;
    var checkedSpace;
    var checkedAt;
    var result;

    checkedDot = argumentString.indexOf(".");
    checkedSpace = argumentString.indexOf(" ");
    checkedAt = argumentString.indexOf("@");

    if( (checkedDot >= 0) && ((checkedSpace == -1) && (checkedAt >= 0))){

        result = "This is a correct email";
    }else{

        result = "This is not an email";
    }

return result;
}
emailContainer = prompt(" Type your email", "variable@hotmail.com");
returnedResult = checkedString(emailContainer);
console.log(returnedResult);