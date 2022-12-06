import { React, useState } from 'react';
import useGetValue from '../hooks/useGetValue';
import Loading from '../components/Loading/Loading';
import Question from '../components/QuestionList/QuestionList';
import AnswerOption from '../components/AnswerOption/AnswerOption';
import ConfirmTest from '../components/ConfirmTest/ConfirmTest';

function Test() {
  const questions = useGetValue('questions');
  const answers = useGetValue('answer');

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [scoreValue, setscoreValue] = useState(0);

  const isLoading = questions.isLoading || answers.isLoading;
  if (isLoading) {
    return (<Loading />);
  }

  const dataQuestions = Object.values(questions.snapshot);
  const dataAnswers = Object.values(answers.snapshot);

  const handleAnswerOptionClick = (poin) => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < dataQuestions.length) {
      setscoreValue(scoreValue + poin);
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const handleBackToTest = () => {
    setShowResult(false);
  };

  return (
    <div className="confirm-test-finish">
      {showResult ? (
        <ConfirmTest handleBackToTest={handleBackToTest} />
      ) : (
        <div className="test-container">
          <Question
            dataQuestions={dataQuestions}
            showResult={showResult}
            currentQuestion={currentQuestion}
            handleBackToTest={handleBackToTest}
          />
          <AnswerOption
            dataAnswers={dataAnswers}
            handleAnswerOptionClick={handleAnswerOptionClick}
          />
        </div>
      )}
    </div>
  );
}

export default Test;
