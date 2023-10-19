// make a variable for the question, options, timer //

var question = document.getElementById("question");
var optionsEl = document.querySelector(".btn-group-vertical");
var questionText = question.querySelector("h2");
console.log(questionText);

var timeEl = document.querySelector(".time");
var secondsLeft = 60;

var currentIndex = 0
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
];
// add a timer //

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

// make a function for updating question //
function newQuestion() {
    questionText.textContent = questions[currentIndex].question;
    //questions[currentIndex].option.forEach(option => {
        //optionsEl.append(option);
    //})
    if (secondsLeft === 0) {
        localStorage.setItem("mostRecentScore", secondsLeft);
        //go to highscores page
        return window.location.assign("/highscores.html");
    }
}
setTime();

newQuestion();
