// make a variable for the question, options //

var question = document.getElementById("question");
var option = Array.from(document.getElementsByClassName("option"));
var currentQuestion = {};
var acceptingAnswers = false;
var availableQuestions = [];


var currentIndex = 0

// add a timer //
var timeEl = document.querySelector(".time");
var secondsLeft = 60;

function setTime() {
  // Set interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
    }

  }, 1000);
}
// add a variable for questions //

var questions = [
    {
        question: "What does HTML stand for?",
        answer: "Hypertext Markup Language",
        option: [
            "Holy Trinity Meat Locker",
            "Hypertext Markup Langauge",
            "Hypertext Makeup Language"
        ]
    },
    {
        question: "Inside which HTML element do we put the Javascript?",
        answer: "<script>",
        option: [
            "<js>",
            "<javascript>",
            "<script>"
        ]
    },
    {
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheets",
        option: [
            "Cascading Style Sheets",
            "Colorful Style Sheets",
            "Computer Style Sheets"
        ]
    },
    {
        question: "How can you make a bulleted list?",
        answer: "<ul>",
        option: [
            "<ol>",
            "<ul>",
            "<list>"
        ]

    }
]
