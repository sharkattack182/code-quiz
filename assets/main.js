var startBtn = document.getElementById("startBtn");
var submitBtn = document.querySelector("button.submitBtn")
var secondsLeft = (questions.length * 15 + 1);
var submitScoreEl = document.querySelector("#submit-score");
var timerEl = document.getElementById("timer");
var questionHead = document.getElementById("questions");
var answerChoices = document.getElementById("answers");
var userScoreEl = document.getElementById("user-score");
var userNameInput;

var questionNumber = -1;
var answer;