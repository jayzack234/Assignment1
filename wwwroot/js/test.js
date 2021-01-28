//This function executes when the submit button is clicked, it gathers the score responses to find the weighted average
$('#submitButton').click(function () {
    //x will hold the scores, the equation calculates each score based on weight
    var x = ((parseFloat($("#Assignments").val()) * .5) + (parseFloat($("#Group_Projects").val()) * .1)
        + (parseFloat($("#Quizzes").val()) * .1) + (parseFloat($("#Exams").val()) * .2)
        + (parseFloat($("#INTEX").val()) * .1));
    //established string to hold lettergrade
    var letterGrade = "";
    //the score is the determined to what letter grade, proven by a series of if statements
    if (x > 94) {
        letterGrade = "A";
    }
    else if (x < 94 && x >= 90) {
        letterGrade = "A-";
    }
    else if (x < 90 && x >= 87) {
        letterGrade = "B+";
    }
    else if (x < 87 && x >= 84) {
        letterGrade = "B";
    }
    else if (x < 84 && x >= 80) {
        letterGrade = "B-";
    }
    else if (x < 80 && x >= 77) {
        letterGrade = "C+";
    }
    else if (x < 77 && x >= 74) {
        letterGrade = "C";
    }
    else if (x < 74 && x >= 70) {
        letterGrade = "C-";
    }
    else if (x < 70 && x >= 67) {
        letterGrade = "D+";
    }
    else if (x < 67 && x >= 64) {
        letterGrade = "D";
    }
    else if (x < 64 && x >= 60) {
        letterGrade = "D-";
    }
    else { letterGrade = "F";}

    //Outputs the calculated score and interpreted grade in an alert box
    alert(x + ", " + letterGrade);
});