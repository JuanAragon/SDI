//alert("JavaScript works!");

//Juan Aragon
//Scalable Data Infrastructures
//Day Eleven
//Practical Exam

//Global Variables

var returnedResult;
var phoneContainer;


function checkedString (argumentString){

    var checkedSpace;
    var checkedDash;
    var result;


    //Methods
    checkedSpace = argumentString.indexOf(" ");
    checkedDash = argumentString.indexOf("-");

    if( (checkedSpace == -1) && (checkedDash >= 0)){

        result = "This is a correct telephone number";
    }else{

        result = "This is not a telephone number";
    }

return result;

}
//Main code
phoneContainer = prompt(" Type your telephone number", "676-898-8909");
returnedResult = checkedString(phoneContainer);
console.log(returnedResult);


