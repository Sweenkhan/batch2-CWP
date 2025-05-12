const questions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Paris", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript",
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
    question: "What year was JavaScript launched?",
    options: ["1996", "1995", "1994", "1997"],
    answer: "1995",
  },
  {
    question: "Which of these is a JavaScript framework?",
    options: ["Django", "Flask", "React", "Laravel"],
    answer: "React",
  },
];


let questionELement = document.querySelector("h1");
let optionsContainer = document.querySelector(".options");
let nextBtn = document.querySelector(".next-btn");
let currentQuestionIndex = 0;
let score = 0;


function nextQuestion() {
  currentQuestionIndex++;
  showQuestion();
}


function showQuestion() {
  questionELement.innerText = questions[currentQuestionIndex].question;

  optionsContainer.innerHTML = "";
  questions[currentQuestionIndex].options.forEach((option) => {

    let btn = document.createElement("button");
    btn.innerText = option;
    btn.classList.add("option");
    
    optionsContainer.appendChild(btn);

  });
}


showQuestion();
nextBtn.addEventListener("click", nextQuestion);
