$(document).ready(function() {

/*game variables*/
var ranGameNumber = 0;
var randButtonNumber =0;
var wins=0;;
var losses=0;
var score =0;
var numbers =[];

    


/*main game function*/
function playGame() {

/*generate random number between 19 and 120*/

ranGameNumber=Math.floor(Math.random()*((120-19)+1)) + 19;
/*write to web page*/
$(".rand-score").html(ranGameNumber);

/*while loop that picks 4 random numbers between 1 and 12 and checks to make sure there are no dupliate numbers*/
var i=0;
while (i < 4){
    randButtonNumber=Math.floor(Math.random()*((12-1)+1)) + 1;
    console.log(randButtonNumber);
    /*check to make sure number is not in array*/
    if (numbers.indexOf(randButtonNumber) === -1) {
    numbers.push(randButtonNumber);
   /* create buttons, assign number values and assign images*/
    var crystalButton = $("<button>");
    var buttonImage="assets/images/crys" + (i+1)+ ".png";
    crystalButton.addClass("crys-btn");
    crystalButton.attr("value", numbers[i]);
    crystalButton.attr("button-id", i);
    crystalButton.css({"background-image": "url(" + buttonImage + ")", "backgroundRepeat": "no-repeat"});
    $("#buttons").append(crystalButton);
    i++;
    }
}

/*on click function*/
$(".crys-btn").on("click", function() {
    score+= parseInt($(this).attr("value"));
    $(".score-text").html(score);
    /* check if over number  */
    if (score > ranGameNumber) {
        $("#result-text").html("You Lose") ;
        losses++; 
        $("#losses").html(losses);
        /*after delay call playAgain*/
        setTimeout(playAgain, 2000);

    }
    /*check if match*/
    else if (score === ranGameNumber){
        $("#result-text").html("You Win!")
        wins++;
        $("#wins").html(wins);
        /*after delay call playAgain*/
        setTimeout(playAgain, 2000);
    }

    
    
    });

}
/*function to reset paramaters and then call playGame function*/
function playAgain () {
    console.log("Play again")
    ranGameNumber = 0;
    score=0;
    numbers=[];
    $("#buttons").empty();
    $(".score-text").html(score);
    $(".rand-score").html(ranGameNumber);
    $("#result-text").html("");
    playGame();
    }


playGame();






















});