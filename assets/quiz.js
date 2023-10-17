// make a variable for each option //

var option1 = document.querySelector("#option1")


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
        id: 1,
        question: "What does HTML stand for?",
        answer: "Hypertext Markup Language",
        option: [
            "Holy Trinity Meat Locker",
            "Hypertext Markup Langauge",
            "Hypertext Makeup Language"
        ]
    },


]

