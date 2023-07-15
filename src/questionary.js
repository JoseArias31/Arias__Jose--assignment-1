import React, { useState } from "react";
import './questionary.css'
import { QaA } from './QueAndAns.js';



function Survey() {
  const questions = QaA;
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isOver, setIsOver] = useState(false);
 const [score, setScore] = useState(0);

  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
  };



  const handleSubmit = (event) => {
    event.preventDefault();
    const currentQuestion = questions[currentQuestionIndex];
  
    alert(
      selectedAnswer === currentQuestion.correctAnswer ? 'Correct!' : 'Incorrect... Try again'
    );
  
    setSelectedAnswer('');
  
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  
    if (currentQuestionIndex === 9) {
      setIsOver(true);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }else {
      console.log(score)
    }
     
  };
  
  
  const handleFinalButton = () => {
   
   
  };
  

  

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };


  
  const currentQuestion = questions[currentQuestionIndex];


  return (
    <div className="mainContainerSurvey">
      <div className="containerSurveyText">
        <h1>First Assignment CSFS1010, Survey App</h1>
        <div className="containerSurvey">
          <form onSubmit={handleSubmit}>
            <h2>Question:</h2>
            <p className="question">{currentQuestion.question}</p>
            {Object.entries(currentQuestion.answers).map(([answerKey, answerValue]) => (
              <label key={answerKey}
              className="labelRadio">
                <input
                className="inputRadio"
                  type="radio"
                  name="answer"
                  value={answerKey}
                  checked={selectedAnswer === answerKey}
                  onChange={handleAnswerChange}
                  required
                />
                {answerValue}
              </label>
            ))}
            <br />
           <div className="buttonOptions">
              <button
                type="button"
                disabled={currentQuestionIndex === 0}
                onClick={handlePreviousQuestion}
                
              >
                &larr; Previous
              </button>
              
  <button type="submit" disabled={currentQuestionIndex === 9}>
    Send
  </button>


{currentQuestionIndex === 9
?
<button 
type="submit"
onClick={handleFinalButton}>
Finish
</button>
: console.log(currentQuestionIndex)}

</div>
          </form>
          {isOver && (
      <div>
        <h2>{`You answered ${score} questions correctly!`}</h2>
        <button
          type="button"
          onClick={() => {
            setIsOver(false);
            setCurrentQuestionIndex(0);
            setScore(0)
          }}
        >
          Try Again
        </button>
      </div>
    )}
          <p>Made by Jose Arias</p>
        </div>
        
      </div>
      
    </div>
  );
}

export default Survey;
