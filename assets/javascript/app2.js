$(document).ready(function(){

var correctCount = 0;
var incorrectCount = 0;
var unanswered = 3;

var time = 10;
var isRunning = false;
var timeUp = false;
var intervalId;

function reset () {
    clearInterval(intervalId);
    isRunning = false;
    time = 10;
}

function decrement () {
    time--;
    $("#timeText").html(time);
    if (time === 0) {
        timeUp = true;
        reset();
    }
}

function start () {
    count();
    $("#triviaScreen").show();
    $("#startScreen").hide();
}

function finish () {
    $("#triviaScreen").hide();
    $("#endScreen").show();
    timeUp = true;
    $("#correctCountText").html(correctCount);
    $("#incorrectCountText").html(incorrectCount);
    $("#unansweredCountText").html(unanswered);
}

function count () {
    intervalId = setInterval(decrement, 1000);
}


$("#triviaScreen").hide();
$("#endScreen").hide();

$(".start").on("click", function() {
    start();

    $(".answer").on("click", function(){
        console.log(this);
        if ($(this).hasClass("correct")) {
            correctCount++;
            unanswered--;
        }
        else {
            incorrectCount++;
            unanswered--;
        }
        if ($(this).hasClass("answers0")) {
            $(".answers0").prop("disabled", true);
        }
        else if ($(this).hasClass("answers1")) {
            $(".answers1").prop("disabled", true);
        }
        else {
            $(".answers2").prop("disabled", true);
        }
        console.log("pushed button");
    })


    $("#done").on("click", finish);

    setTimeout(finish, 10000);

    console.log(correctCount);
    console.log(incorrectCount);
    console.log(unanswered);

});

});