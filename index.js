
const questions = [["what color are bananas"],
["what color are green apples"],
["what color are strawberrys"],
["what color are oranges"],
["what color are tomatos"]];

const answers = [["yellow", "red", "pink", "gold"],
["grey", "green", "orange", "silver"],
["green", "red", "magenta", "jade"],
["red", "pink", "orange", "yellow"],
["white", "grey", "blue", "red"]];

let questionNo = 1;
let score = 0;

function start() {
    document.getElementById("hideThis").style.display = "block";
    document.getElementById("startBtn").style.display = "none";
    document.getElementById("paragraph").style.display = "none";
    populateQuestion();
    populateAnswerOptions();
}

function populateQuestion() {
    document.getElementById("question").innerHTML = questions[0][0];
}

function populateAnswerOptions() {
    document.getElementById("btn1").value = answers[0][0];  //give the buttons the value of elements at these indexes in answers array
    document.getElementById("btn2").value = answers[0][1];
    document.getElementById("btn3").value = answers[0][2];
    document.getElementById("btn4").value = answers[0][3];
}






