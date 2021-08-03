
const questions = [["what color are bananas"],
["what color are green apples"],
["what color are strawberrys"],
["If you found a baby sparrow would you"],
["what color are tomatos"]];

const answers = [["yellow", "red", "pink", "purple"],
["grey", "green", "orange", "silver"],
["green", "red", "magenta", "jade"],
["Teach it to tweet", "Ask it to be your friend", "Pin it to a board", "Tell it about your bird nurturing skills"],
["white", "grey", "blue", "red"]];

let questionNo = 1;
let score = 0;

function start() {
    document.getElementById("hideThis").style.display = "block";
    document.getElementById("startBtn").style.display = "none";
    document.getElementById("paragraph").style.display = "none";
    document.getElementById("quizTitle").style.display = "none";
    document.getElementById("icons").style.display = "none";

    populateQuestion();
    populateAnswerOptions();
}

function populateQuestion() {
    document.getElementById("question").innerHTML = questions[3][0];
}

function populateAnswerOptions() {
    document.getElementById("btn1").value = answers[3][0];  //give the buttons the value of elements at these indexes in answers array
    document.getElementById("btn2").value = answers[3][1];
    document.getElementById("btn3").value = answers[3][2];
    document.getElementById("btn4").value = answers[3][3];
}






