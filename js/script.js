// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/*global $*/



// DOCUMENT READY FUNCTION BELOW
var userChoice = "";
var computerChoice = "";
var winner = "";
var randomNumber = 0;

$("#shoot").click(function(){
    userChoice = $("#input").val().toUpperCase();
    $("#userChoice").text(userChoice);
    randomNumber = Math.random();
    
    if(randomNumber> .66) {
        computerChoice = "ROCK";
        $("#computerChoice").html("ROCK"); 
    }
    else if (randomNumber <.66 && randomNumber >.33){
        computerChoice = "PAPER";
        $("#computerChoice").html("PAPER"); 
    }
    else if (randomNumber <.33){
        computerChoice = "SCISSORS";
        $("#computerChoice").html("SCISSORS"); 
    }
    if(computerChoice == "ROCK" && userChoice == "ROCK"){
        $("#result").html ("TIE!");
    }
    else if(computerChoice == "PAPER" && userChoice == "PAPER"){
        $("#result").html ("TIE!");
    }
    else if(computerChoice == "SCISSORS" && userChoice == "SCISSORS"){
        $("#result").html ("TIE!");
    }
    else if(computerChoice == "PAPER" && userChoice == "ROCK"){
        $("#result").html ("COMPUTER WINS.");
    }
    else if(computerChoice == "SCISSORS" && userChoice == "PAPER"){
        $("#result").html ("COMPUTER WINS.");
    }
    else if(computerChoice == "ROCK" && userChoice == "SCISSORS"){
        $("#result").html ("COMPUTER WINS.");
    }
    else if(computerChoice == "SCISSORS" && userChoice == "ROCK"){
        $("#result").html ("YOU WIN!");
    }
    else if(computerChoice == "ROCK" && userChoice == "PAPER"){
        $("#result").html ("YOU WIN!");
    }
    else if(computerChoice == "PAPER" && userChoice == "SCISSORS"){
        $("#result").html ("YOU WIN!");
    }
});