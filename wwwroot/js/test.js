var submit = document.getElementById("submitButton");

submit.addEventListener("click", function () {
    var x = ((parseFloat(document.getElementById("Assignments").value) * .5) + (parseFloat(document.getElementById("Group_Projects").value) * .1)
        + (parseFloat(document.getElementById("Quizzes").value) * .1) + (parseFloat(document.getElementById("Exams").value) * .2)
        + (parseFloat(document.getElementById("INTEX").value) * .1));
    var letterGrade = "";
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

    alert(x + ", " + letterGrade);
});