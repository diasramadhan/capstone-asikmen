import React from 'react';
import './QuestionList.scss';

function Question({ dataQuestions, currentQuestion }) {
  return (
    <section className="question-section">
      <div className="question-number-wrapper bg-primary">
        <p className="question-number">
          {currentQuestion + 1}
          <span className="question-total">
            /
            {dataQuestions.length}
          </span>
        </p>
      </div>
      <div className="question-text">{dataQuestions[currentQuestion].questionText}</div>
    </section>
  );
}

export default Question;
