$(document).ready(function() {

    var questions = ["What year did DisneyLand open?", "What was the first full length CGI movie?", "What year did Mickey Mouse first appear?" ];

    var answers = {
        q0 : ["1955.c", "1962", "1946", "1971"],
        q1 : ["Toy Story.c", "The Lion King", "Monsters Inc.", "A bug's Life"],
        q2 : ["1928.c", "1919", "1934", "1920"]
    };

    console.log(answers.q1.length);

    var correctCount = 0;
    var incorrectCount = 0;
    var unansweredCount = 0;
    var answerNumber = 0;
    var correctAnswer0 = "";
    var correctAnswer1 = "";
    var correctAnswer2 = "";
    var time=10;
    var isRunning = false;
    var intervalId;
    var outOfTime = false;

    function decrement() {
        time--;
        $("#timeText").html(time);
        if (time === 0) {
            outOfTime = true;
            clearInterval(intervalId);
            time = 10;
            console.log
        }
    }

    function count() {
        time--;
        intervalId = setInterval(decrement, 1000);
        isRunning = true;
    }

    function shuffle(array) {
        var j, x, i;
        for ( i = array.length -1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = array[i];
            array[i] = array[j];
            array[j] = x;
        }
        return array;
    }

    function showQuestion (questionNumber, question, answersArray) {
        $("#question"+questionNumber).html(question);
        shuffle(answersArray);
        for (i=0; i < answersArray.length; i++) {
            $("#answerText"+i).removeClass("correct");
            $("#answerText"+i).hasClass("answer"+questionNumber, fillAnswers(answersArray));

        }
        return correctAnswer;
    }

    function fillAnswers (answersArray) {
        if (answersArray[i].endsWith(".c")) {
            var correctAnswer = answersArray[i].substr(0, answersArray.length);
            $("#answerText"+i).html(correctAnswer); 
            $("#answerText"+i).addClass("correct");
        }
        else {
            $("#answerText"+i).html(answersArray[i]);
        }
        return correctAnswer;
    }

    function chooseAnswer () {
            console.log(answerNumber);
            if ( ($(this).hasClass("correct"))) {
                correctCount++;
                console.log("correct: " + correctCount);
                round++;
                $("#triviaScreen").hide();
                $("#answerScreen").show()
                $("#responseText").html("Correct!")
                $("#correctAnswerText").html(correctAnswer);
            }
            else {
                incorrectCount++;
                console.log("incorrect: " + incorrectCount);
                round++;
                $("#triviaScreen").hide();
                $("#answerScreen").show()
                $("#responseText").html("Incorrect!")
                $("#correctAnswerText").html(correctAnswer);
            }
    }




   $("#triviaScreen").hide();
   $("#answerScreen").hide();
   $("#endScreen").hide();
    
    $("#start").on("click", function() {
        $("#startScreen").hide();
        $("#triviaScreen").show();
        correctAnswer0 = showQuestion(0, questions[0], answers.q0);
        correctAnswer1 = showQuestion(1, questions[1], answers.q1);
        correctAnswer2 = showQuestion(2, questions[2], answers.q2);
        count();
        


    });





    // this finds the sting in the array of answers that has the .c at the end, then makes a new variable of that string that doesnt have .c at the end
    for (i=0; i < answers.q1.length; i++)
        if (answers.q1[i].endsWith(".c")) {
            var x = answers.q1[i].substr(0, answers.q1.length);
        }
});