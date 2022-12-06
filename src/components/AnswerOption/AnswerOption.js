import React from 'react';
import './AnswerOption.scss';

function AnswerOption({ dataAnswers, handleAnswerOptionClick }) {
  return (
    <section className="answer-section">
      {dataAnswers.map((answerOption) => (
        <button type="button" key={answerOption.poin} className="btn btn-outline-primary fs-5" onClick={() => handleAnswerOptionClick(answerOption.poin)}>{answerOption.answerText}</button>
      ))}
    </section>
  );
}

export default AnswerOption;
