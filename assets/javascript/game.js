// Global Variable 

    //Crytal Var
var crystal = {
    one:
    {
        name: "One",
        value: 0
    },
    two:
    {
        name: "Two",
        value: 0,
    },
    three:
    {
        name: "Three",
        value: 0,
    }
};

    //scores
var currentScore = 0;
var targetScore = 0;

    //count
var wins = 0;
var losses = 0;


//Functions

//Stole this from the video no shame
var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min +1)) +min;
};

var startGame = function() {
    currentScore = 0;
    targetScore = getRandom(19, 120);
    crystal.one.value = getRandom(1, 12);
    crystal.two.value = getRandom(1, 12);
    crystal.three.value = getRandom(1, 12);

    $("#yourScore").html(currentScore);
    $("#targetScore").html(targetScore);
 
    console.log(targetScore);
    console.log(crystal.one);
    console.log(crystal.two);
    console.log(crystal.three);
};

// Click Response
var addValues = function(crystal) {
    currentScore = currentScore + crystal.value;
    $("#yourScore").html(currentScore);
    checkWin()
    console.log("Your Score: "+ currentScore);
};

var checkWin = function() {
    if(currentScore > targetScore) {
        alert("LOST!");
        losses++;
        $("#lossCount").html(losses)

        //reset game
        startGame();
    }
    else if(currentScore == targetScore) {
        alert("WINNER!");
        wins++;
        $("#winCount").html(wins)

        //reset game
        startGame();
    }
}

//Process 
        //starts game
startGame();

$("#crystalOne").click(function() {
    addValues(crystal.one);
})
$("#crystalTwo").click(function() {
    addValues(crystal.two);
})
$("#crystalThree").click(function() {
    addValues(crystal.three);
})