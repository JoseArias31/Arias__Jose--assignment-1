import React from "react";
import './survey.css'

function Survey() {
return(

<div className="mainContainerSurvey">
    
<div className="containerSurveyText">
<h1>First Assignment CSFS1010, Survey App</h1>
<div className="containerSurvey">
<form> 
    
      <h2>Pregunta:</h2>
      <p>Front-End Questions</p>
      <label>
        <input
          type="radio"
          name="answer"
          value="option1"
          //checked={selectedAnswer === 'option1'} <form onSubmit={handleSubmit}>
          //onChange={handleAnswerChange}
        />
        Opción 1
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