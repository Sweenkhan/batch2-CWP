const question = [
    {
        question: "1. What is the national animal of India?",
        opction: ["lion", "Tiger", "Elephant", "Leopard"],
        answer: "Tiger"
    },

    {
        question: " Who was the first Prime Minister of independent India?",
        opction: ["Mahatma Gandhi", "Sardar Patel", "Jawaharlal Nehru", "Subhas Chandra Bose"],
        answer: "Jawaharlal Nehru"
    },
    {
        question: "In which year did India gain independence?",
        opction: ["1945", "1946", "1947", "1950"],
        answer: "1947"
    },
    {
        question: "What is the capital of Rajasthan?",
        opction: ["Jodhpur", "Jaipur", "Udaipur", "Bikaner"],
        answer: "Jaipur"
    },
    {
        question: "Which Indian city is known as the “Silicon Valley of India”?",
        opction: ["Hyderabad", "Bengaluru", "Pune", "Delhi"],
        answer: "Hyderabad"
    },
    {
        question: "Who wrote the Indian national anthem 'Jana Gana Mana'?",
        opction: ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Subramania Bharati", "Sarojini Naidu"],
        answer: "Rabindranath Tagore"

    },
    {
        question: "What is the currency of India?",
        opction: ["Rupee", "Dinar", "Taka", "Ringgit"],
        answer: "Rupee"
    },
    {
        question: "Which dance form is native to Kerala?",
        opction: ["Kathak", "Odissi", "Bharatanatyam", "Kathakali"],
        answer: "Kathak"

    },
    {
        question: "Where is the Sun Temple located?",
        opction: ["Konark", "Madurai", "Varanasi", "Hampi"],
        answer: " Konark"

    },
    {
        question: "What is India's national sport?",
        opction: ["Cricket", "Hockey", "Kabaddi", "Football"],
        answer: "Hockey"

    },
    {
        question: "Who discovered gravity?",
        opction: ["Albert Einstein", "Galileo Galilei", "Isaac Newton", "Stephen Hawking"],
        answer: "Isaac Newton"
    },
    {
        question: "What is the largest planet in our solar system?",
        opction: ["Earth", "Jupiter", "Saturn", "Mars"],
        answer: "Jupiter"
    },
    {
        question: "Who is known as the 'Father of the Nation' in India?",
        opction: ["Jawaharlal Nehru", "Sardar Patel", "Mahatma Gandhi", "Dr. B. R. Ambedkar"],
        answer: "Mahatma Gandhi"
    },
    {
        question: "Which is the longest river in the world?",
        opction: ["Amazon", "Nile", "Ganga", "Yangtze"],
        answer: "Nile"
    },
    {
        question: "What is the chemical symbol for Gold?",
        opction: ["Au", "Ag", "Go", "Gd"],
        answer: "Au"
    },
    {
        question: "Which organ purifies our blood?",
        opction: ["Heart", "Lungs", "Liver", "Kidneys"],
        answer: "Kidneys"
    },
    {
        question: "How many continents are there on Earth?",
        opction: ["5", "6", "7", "8"],
        answer: "7"
    },
    {
        question: "What is the currency of Japan?",
        opction: ["Yuan", "Won", "Yen", "Ringgit"],
        answer: "Yen"
    },
    {
        question: "What gas do plants absorb from the atmosphere?",
        opction: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        answer: "Carbon Dioxide"
    },
    {
        question: "Which festival is known as the Festival of Lights in India?",
        opction: ["Holi", "Diwali", "Navratri", "Eid"],
        answer: "Diwali"
    }
];
// let userID = document.querySelector("#userId")
// let username = prompt("Enter your Full Name")
// let emailId = prompt("confrem your register email ")

// p.appendChild("span")
// document.querySelector("#userId").innerHTML = `full name : ${username} , register email ID ${emailId}`;

// console.log( document.querySelector("#userId"))


//   Get DOM elements

let questionElement = document.querySelector(".question");
let opctionContainer = document.querySelector(".opction-contaier");
let nextButton = document.querySelector(".next-btn");
let resultContainer = document.querySelector(".result");
let questionNumberELement = document.querySelector(".question-number");
let questionContainer = document.querySelector(".question-container");
let scoreElement = document.querySelector(".score");
let restartButton = document.querySelector(".restart-btn")
let backButton = document.querySelector(".back-btn")


let currentQuestionIndex = 0;
let score = 0;
let selectAnswer = null



//next question
function nextQuestion() {

    // console.log(score)
    if (selectAnswer === null) {
        alert("please slect an answer")
        return;
    }

    if (selectAnswer === question[currentQuestionIndex].answer) {
        score++
    }
    currentQuestionIndex++

    if (currentQuestionIndex < question.length) {
        showquestion()
        // currentQuestionIndex++
    } else {
        showresults()
    }
}

//display currant question 
function showquestion() {
    selectAnswer = null
    resultContainer.classList.add("hide")

    // get currrent question
    let currentQuestion = question[currentQuestionIndex]


    //update question number
    questionNumberELement.textContent = `question ${currentQuestionIndex + 1} of ${question.length}`

    // update question text
    questionElement.textContent = currentQuestion.question


    // clear previous text
    opctionContainer.innerHTML = ""

    // add new opctions
    currentQuestion.opction.forEach((opction) => {
        const button = document.createElement("button");
        button.textContent = opction;
        button.classList.add("opction");

        button.addEventListener("click", () => selectedAnswer(opction))

        opctionContainer.appendChild(button)
    })
}
// handle answer selection 
function selectedAnswer(answer) {
    document.querySelectorAll(".opction").forEach((opction) => {
        opction.classList.remove("selected")
    })
    event.target.classList.add("selected");
    selectAnswer = answer

}
function showresults() {

    (questionElement.innerHTML = ""),
        (questionNumberELement.textContent = ""),
        (opctionContainer.innerHTML = ""),
        nextButton.classList.add("hide");
    scoreElement.textContent = score;
    resultContainer.classList.remove("hide");
}
showquestion()

nextButton.addEventListener("click", nextQuestion)
restartButton.addEventListener("click", () => {
    score = 0;
    currentQuestionIndex = 0;
    showquestion()

    // resultContainer.classList.add("hide")
    nextButton.classList.remove("hide")

})


