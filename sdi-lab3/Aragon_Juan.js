//alert("JavaScript works!");

/*
 Juan Aragon
 SDI
 Lab 3
 Variables and Outputs
 */


// variables
var timeofWakingUp = 7;
var beforeofTakingaShower = "put music in my Ipad";
var goingtotheKitchen = "It\'s time to eat cereal";
var eatingBreakfast = true;
var myFood = "Pancakes";
var newFood = "";
var ballsofCereal = 0;
var ballsofCerealputit = 40;
var sumofballsofCereal = 80;


//Initial Outputs
console.log(" I wake up at " + timeofWakingUp + ".");
console.log(" Before entering to the shower I " + beforeofTakingaShower + ".");
console.log(" After taking a shower I know that " + goingtotheKitchen + ".");
console.log(" It\'s " + eatingBreakfast + " I eat breakfast before going to school.");

eatingBreakfast = confirm("Am I eating cereal for breakfast? Click OK for yes, Cancel for no.");


if (eatingBreakfast === false) {


    newFood = prompt("Please enter the type of food you eat for breakfast ");

    if (newFood === myFood) {

        console.log("You know the good stuff, I also like " + myFood);

    } else {

        console.log("Sorry, I don't like that meal!");

    }

}else{


    ballsofCereal = parseInt (prompt( "How many balls do you eat?"));

    if(ballsofCereal == ballsofCerealputit){

        sumofballsofCereal = (sumofballsofCereal - ballsofCerealputit);

        console.log("I eat the same amount" + sumofballsofCereal);


    } else{

        console.log("We eat very different amounts");
    }

    }









