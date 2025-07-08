import { useState } from 'react' 
import data from './data'
import './App.css'


function App() { 

  

  const [currentQuest, setCurrentQuest] = useState(0)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState(null)


// to handle the answer, which user has selected
 function handleAnswer(opt){

        setSelectedAnswer(true)
        if(opt === data[currentQuest].answer){
          console.log("right answer")
          setScore(score + 1)
        }

        console.log(opt)
 }


// for changing the current question and ensuring that user has selected the option
function handleNextQuestion(){
      if(selectedAnswer === null){
          alert("please select any answer")
          return
      }

      if(currentQuest < data.length-1) { 
        setCurrentQuest(currentQuest + 1)
      } else {
        setShowResult(true)
      }

      setSelectedAnswer(null)
}



//for restarting the quiz
function restartQuiz(){
  setShowResult(false)
  setScore(0)
  setCurrentQuest(0)
  setSelectedAnswer(null)
}

  return (
 
      <div className='wrapper'>
        
       {(showResult)


          ?
       <div className='showResult-container'>
        <p>score {score} is out of 8</p>
        <button onClick={restartQuiz}> restart quiz </button>
      </div>
       : 
      

      <div className='quiz-container'>
        <p>Question {data[currentQuest].id} is out of 8</p>
        <h2>   {data[currentQuest].question}</h2>
        {
          data[currentQuest].options.map((opt, index) =>{
            return (
              <button key={index}  onClick={() => handleAnswer(opt)} className='focus:outline-violet-700' >{opt}</button>
            )
          })
        }

       <p><button onClick={handleNextQuestion}>next question</button></p>
      </div>
        } 

      </div>
   
  )

}

export default App
