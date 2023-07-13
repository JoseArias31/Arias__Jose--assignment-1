import React, { useState } from "react";
import './questionary.css'
import { QaA } from './QueAndAns.js';



function Survey() {
  const questions = QaA;
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

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

  
    setCurrentQuestionIndex(currentQuestionIndex + 1);
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
    Enviar
  </button>


{currentQuestionIndex === 9
?
<button type="submit">
Finish
</button>
: console.log(currentQuestionIndex)}
</div>
          </form>
          <p>Made by Jose Arias</p>
        </div>
        
      </div>
      
    </div>
  );
}

export default Survey;
