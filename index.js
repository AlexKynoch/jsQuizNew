window.onload = function () {
    document.getElementById("next").style.display = "none";
    document.getElementById("again").style.display = "none";

}
const questions = [["what color are bananas"],
["what color are green apples"],
["what color are strawberrys"],
["what color are apricots"],
["what color are tomatos"]];

const answers = [["A) yellow", "B) red", "C) pink", "D) purple"],
["grey", "green", "orange", "silver"],
["green", "red", "magenta", "jade"],
["red", "purple", "orange", "pink"],
["white", "grey", "blue", "red"]];

let questionNo = 1;
let score = 0;

function start() {

    document.getElementById("hideThis").style.display = "block";
    document.getElementById("startBtn").style.display = "none";
    document.getElementById("paragraph").style.display = "none";
    document.getElementById("quizTitle").style.display = "none";
    document.getElementById("icons").style.display = "none";

    document.getElementById("next").style.display = "block";
    document.getElementById("again").style.display = "none";


    if (questions.length != 0) {
        populateQuestion();
        populateAnswerOptions();
        questions.shift(); //removes first array block.
        answers.shift();
        questionNo++;

    }
    else {
        document.getElementById("questionNumber").innerHTML = "The End!";  //if no questions left in questoins array change questionNumber message to "The End!".
        document.getElementById("again").style.display = "block"; //remove next button
        document.getElementById("next").style.display = "none";
        document.getElementById("quizTitle").innerHTML = "Your score is " + score; //change contents of quizTitle
        document.getElementById("quizTitle").style.display = "block";// show content of quizTitle
        document.getElementById("hideThis").style.display = "none"; //hide all the buttons
        document.getElementById("icons").style.display = "block";

    }

}

function populateQuestion() {
    document.getElementById("question").innerHTML = questions[0][0]; //add question from value of element in first index of first array
    document.getElementById("questionNumber").innerHTML = "Question " + questionNo; //add question number to page

}

function populateAnswerOptions() {
    document.getElementById("opt1").innerHTML = answers[0][0];  //give the id options the value of elements at these indexes in answers array
    document.getElementById("opt2").innerHTML = answers[0][1];
    document.getElementById("opt3").innerHTML = answers[0][2];
    document.getElementById("opt4").innerHTML = answers[0][3];

    // document.getElementById("btn1").value = answers[0][0];  //give the buttons the value of elements at these indexes in answers array
    // document.getElementById("btn2").value = answers[0][1];
    // document.getElementById("btn3").value = answers[0][2];
    // document.getElementById("btn4").value = answers[0][3];
}

function whichButton(clicked_id) {


    // // if ((clicked_id == "btn1") && (questionNo == 1)) {
    // if ((clicked_id == "btn1") && (questions.length != 0)) {
    //     // alert("you pressed " + clicked_id);
    //     let questNo = questionNo -= 1;
    //     alert("question number is " + questNo);
    //     // questNo++;
    // }

    if (clicked_id == "btn1") {
        score = score + 1;

    } else if (clicked_id == "btn2") {
        score = score + 2;

    } else if (clicked_id == "btn3") {
        score = score + 3;

    } else {
        score = score + 4;


    }
}

function reload() {
    location.reload();
}










