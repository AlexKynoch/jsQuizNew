window.onload = function () {
    document.getElementById("next").style.display = "none";
    document.getElementById("again").style.display = "none";

}
const questions = [["If you found a baby Sparrow would you?"],
["You are at a party where you don't know anyone, would you?"],
["Which personality is closest to yours?"],
["If you wrote a book what would the title be?"],
["It's Saturday night and everyone is out except you, would you?"]];

const answers = [["A) Ask it to be your friend.", "B) Teach it to tweet.", "C) Tell it about your bird nurturing skills.", "D) Pin it to a board."],
["A) Wait until someone mentions something interesting then follow them.", "B) Go home, it's full of peasants anyway.", "C) Only talk to people who look like they are in recruitment.", "D) Show the hosts how to redesign their ugly kitchen."],
["A) I have millions of friends I've never met.", "B) I like to keep it brief.", "C) I like everyone to know how wonderful I am.", "D) I like to collect other people's photos and organise them."],
["A) What I ate for breakfast.", "B) This is more of a flyer really.", "C) It's all about me.", "D) A collection of other people's work."],
["A) Post fml and hope someone asks why so you can reply - it's private.", "B) Binge watch political debates so you can see all your old school mates.", "C) Tell your shadow about your Qualificatons.", "D) Sort through your photos."]];

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
        buttonStyle();
        populateAnswerOptions();
        questions.shift(); //removes first array block.
        answers.shift();
        questionNo++;

    }
    else {
        document.getElementById("questionNumber").innerHTML = "Results";  //if no questions left in questoins array change questionNumber message to "The End!".
        document.getElementById("again").style.display = "block"; //remove next button
        document.getElementById("next").style.display = "none";
        // document.getElementById("quizTitle").innerHTML = "Your score is " + score; //change contents of quizTitle
        // document.getElementById("quizTitle").style.display = "block";// show content of quizTitle
        document.getElementById("hideThis").style.display = "none"; //hide all the buttons
        // document.getElementById("results1").style.display = "block";
        results();
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
}

function whichButton(clicked_id) {

    if (clicked_id == "btn1") {

        disableButton(clicked_id);
        score = score + 1;

    } else if (clicked_id == "btn2") {

        disableButton(clicked_id);
        score = score + 2;

    } else if (clicked_id == "btn3") {

        disableButton(clicked_id);
        score = score + 3;

    } else {

        disableButton(clicked_id);
        score = score + 5;


    }
    console.log(score);
}

function results() {


    if (score == 0) {

        document.getElementById("quizTitle").style.display = "none";
        document.getElementById("results0").style.display = "block";

    } else if ((score >= 5) && (score <= 8)) {

        document.getElementById("results1").style.display = "block";

    } else if ((score > 8) && (score <= 13)) {

        document.getElementById("results2").style.display = "block"; document.getElementById("results2").style.display = "block";

    } else if ((score > 13) && (score <= 18)) {
        document.getElementById("results3").style.display = "block";
    } else {

        document.getElementById("results4").style.display = "block";
    }

}

function disableButton(clicked_id) {

    document.getElementById(clicked_id).setAttribute("disabled", true);
    document.getElementById(clicked_id).style.opacity = "0.5";
}

function buttonStyle() {

    let options = document.getElementById("options-container").childNodes; // get everything in options-container and returns an array of it 
    options.forEach((option) => {  //goes through all of options and for each option it completes an action
        if ((option.type == "button") && (option.attributes.disabled)) { // checks option type is button and that is has attribute of disabled 
            option.toggleAttribute("disabled"); //if has attribute of disabled whatever it is set to reverse it
            option.style.opacity = "1"; // make opacity full again
            // console.log(option);
        }
    })
}

function reload() {
    location.reload();
}










