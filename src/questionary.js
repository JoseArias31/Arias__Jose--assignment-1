import React, { useState } from "react";
import './questionary.css'
import { QaA } from './QueAndAns.js';



function Survey() {

//Hooks

  const questions = QaA;
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isOver, setIsOver] = useState(false);
  const [score, setScore] = useState(0);

 //Hooks

// Event Handler
  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

// Event Handler


// Handle Submit Buttons

  const handleSubmit = (event) => {
    event.preventDefault();
    const currentQuestion = questions[currentQuestionIndex];
  
    // It says if the answer selected is correct or wrong
    alert(
      selectedAnswer === currentQuestion.correctAnswer ? 'Correct!' : 'Incorrect... Try again'
    );
  
    setSelectedAnswer('');

    //It counts + 1 if the answer selected is corrected with the value of the answer itself
  
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  
    //Conditional to handle the last question to change the "isOver" status from false to true and render the result with a Div.
    if (currentQuestionIndex === 9) {
      setIsOver(true);
    }
   //Conditional that prevents crashing the app, once the conditional notices that it is the last question in the object, it shows the results at the end
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }else {
      console.log(score)
    }
     
  };

  // Handle Submit Buttons
  
  
  const handleFinalButton = () => {
   
   
  };
  

  //Handle function to go to the previous question with an onClick Attribute for the Previous Button.

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };


  //  Variable to call the array with the questions an answers
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
      <div className="rendered">
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
          <p className="done">Made by Jose Arias</p>
        </div>
        
      </div>
      
    </div>
  );
}

export default Survey;
