import questions from "./data.js"

//Get DOM elements
let questionElement = document.querySelector(".question");
let optionsContainer = document.querySelector(".options-container");
let nextButton = document.querySelector(".next-btn");
let resultContainer = document.querySelector(".result");
let questionNumberELement = document.querySelector(".question-number");
let questionContainer = document.querySelector(".question-container");
let scoreElement = document.querySelector(".score");
let restartButton = document.querySelector(".restart-btn")
let timeElement = document.querySelector(".timer")

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;
let startTimer = 10



//next question
function nextQuestion() {
  console.log(score)
  startTimer = 10
  
  if (selectedAnswer === null) {
    alert("please select an answer!");
    return;
  }

  //click if answer is correct
  if (selectedAnswer === questions[currentQuestionIndex].answer) {
    score++;
  }

  //move to next question
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResults();
  }
}


//Display current question
function showQuestion() {
  selectedAnswer = null
  resultContainer.classList.add("hidden");

  //get current question
  let currentQuestion = questions[currentQuestionIndex];

  // update question number
  questionNumberELement.textContent = `Question ${
    currentQuestionIndex + 1
  } of ${questions.length}`;

  //update question text
  questionElement.textContent = currentQuestion.question;

  // clear previous text
  optionsContainer.innerHTML = "";

  //Add new options
  currentQuestion.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option");

    button.addEventListener("click", () => selectAnswer(option));
    optionsContainer.appendChild(button);
  });
}



// handle Answer selection
function selectAnswer(answer) {

    document.querySelectorAll(".option").forEach((option) => {
       option.classList.remove("selected")
    })

  event.target.classList.add("selected");
  console.log(answer);
  selectedAnswer = answer;
}


//result showing
function showResults() {
  (questionElement.innerHTML = ""),
    (questionNumberELement.textContent = ""),
    (optionsContainer.innerHTML = ""),
    nextButton.classList.add("hidden");
    scoreElement.textContent = score;
    resultContainer.classList.remove("hidden");
    timeElement.classList.add("hidden")
}

//starting quiz second time
function startQuiz(){
    currentQuestionIndex = 0;
    score= 0;
    nextButton.classList.remove("hidden");
    showQuestion(); 
    startTimer = 10
    timeElement.classList.remove("hidden")
}


   
 
  
  var intervalID = setInterval(() => {
        startTimer--
        if(startTimer < 0){ 
          if(selectedAnswer === null) selectedAnswer = false 
          nextQuestion()
          startTimer = 10
          timeElement.innerHTML = startTimer
        }else{
          timeElement.innerHTML = startTimer
        }
  }, 1000);
  
 


restartButton.addEventListener("click", startQuiz)
nextButton.addEventListener("click", nextQuestion);
showQuestion();
