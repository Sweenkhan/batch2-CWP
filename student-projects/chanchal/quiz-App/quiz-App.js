
let questions = [
    {
        question: "what is 2*2?",
        options: [4, 8, 6, 10],
        answer: 4
    },
    {
        question: "what is 10+10?",
        options: [30, 20, 40, 50],
        answer: 20
    },
    {
        question: "what is the full form of css?",
        options: ["cascading style sheet", "cascading style", "Hyper Text markup language","style sheet"],
        answer: "cascading style sheet"
    },
    {
        question: "What does HTML stand for?",
        options: [
            "Hypertext Markup Language",
            "Hypertext Markdown Language",
            "Hyperloop Machine Language",
            "Helicopters Terminals Motorboats Lamborginis",
        ],
        answer: "Hypertext Markup Language",
    },
    {
        question: "Who is the father of computer?",
        options: ["Charles Babbage", "Vint Cerf", "Martin Cooper", "Tim Berners-Lee"],
        answer:  "Charles Babbage",
    },
]

// Get Dom elements
let questionContainer = document.querySelector(".question-container")
let questionNumber = document.querySelector(".question-number");
let question = document.querySelector(".question");
let optionContainer = document.querySelector(".options-container")
let nextButton = document.querySelector(".next-btn")
let resultContainer = document.querySelector(".result")
let scoreElement = document.querySelector(".score")
let restartButton = document.querySelector(".restart-btn")


let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;

//next question
function nextQuestion(){
    if(selectedAnswer === null){
        alert("please select an answer!");
        return;
    }

    // click if answer is correct
    
    if(selectedAnswer === questions[currentQuestionIndex].answer){
       score++;
    }

    // move to next question
    currentQuestionIndex++;

    if(currentQuestionIndex < questions.length){
      showQuestion()  
    } else {
      showResults();
    }
    console.log(currentQuestionIndex)
}  

// Display current Question

function showQuestion(){
    selectedAnswer = null
    resultContainer.classList.add("hidden")
 
// get current question
let currentQuestion = questions[currentQuestionIndex];

// update question number
questionNumber.textContent = `Question ${currentQuestionIndex +1} of ${questions.length}`;


// update question text
question.textContent = currentQuestion.question

// clear previous text
optionContainer.innerHTML = "";

// Add new options
 currentQuestion.options.forEach((option) => {
       const button = document.createElement("button");
       button.textContent = option;
       button.classList.add("option");

       button.addEventListener("click",() => selectAnswer(option));
       optionContainer.appendChild(button);
    })
}

// handle Answer selection

function selectAnswer(answer){
    document.querySelectorAll(".option").forEach((option) => {
        option.classList.remove("selected")
    })
    event.target.classList.add("selected");
    console.log(answer)
    selectedAnswer = answer
}

// result showing 

function showResults(){
    (question.innerHTML = ""),
    (questionNumber.textContent = ""),
    (optionContainer.innerHTML = ""),
    nextButton.classList.add("hidden");
    scoreElement.textContent = score;
    resultContainer.classList.remove("hidden");
}

function startQuiz(){
    currentQuestionIndex =0;
    score = 0;
    nextButton.classList.remove("hidden");
    showQuestion();
}

restartButton.addEventListener("click",startQuiz)
nextButton.addEventListener("click",nextQuestion);

showQuestion();