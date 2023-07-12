import React from "react";
import './survey.css'
import { QaA } from './QueAndAns.js';

function Survey() {

    const questions = QaA;
return(

<div className="mainContainerSurvey">
    
<div className="containerSurveyText">
<h1>First Assignment CSFS1010, Survey App</h1>
<div className="containerSurvey">
<form> 
    
      <h2>Question:</h2>
      <p>{questions[0].question}</p>
      <label>
        <input
          type="radio"
          name="answer"
          value="option1"
          //checked={selectedAnswer === 'option1'} <form onSubmit={handleSubmit}>
          //onChange={handleAnswerChange}
        />
        {questions[0].answers.ans1}
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="answer"
          value="option2"
         // checked={selectedAnswer === 'option2'}
         // onChange={handleAnswerChange}
        />
        Opción 2
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="answer"
          value="option3"
          //checked={selectedAnswer === 'option3'}
          //onChange={handleAnswerChange}
        />
        Opción 3
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="answer"
          value="option4"
          //checked={selectedAnswer === 'option4'}
         // onChange={handleAnswerChange}
        />
        Opción 4
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>


</div>
</div>

</div>


)



}

export default Survey;