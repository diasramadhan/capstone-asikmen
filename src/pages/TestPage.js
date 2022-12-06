import { React, useState } from 'react';
import useGetValue from '../hooks/useGetValue';
import useCreateValue from '../hooks/useCreateValue';
import Loading from '../components/Loading/Loading';
import showFormattedDateID from '../utils/date-formater';
import Question from '../components/QuestionList/QuestionList';
import AnswerOption from '../components/AnswerOption/AnswerOption';
import ConfirmTest from '../components/ConfirmTest/ConfirmTest';

function Test({ userId, setHistoryTestId }) {
  const questions = useGetValue('questions');
  const answers = useGetValue('answer');

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [scoreValue, setscoreValue] = useState(0);
  const createResult = useCreateValue();

  const createNewResult = async () => {
    let res = 0;
    if (scoreValue < 14) {
      res = 'Depresi Ringan';
    } else if (scoreValue < 40) {
      res = 'Depresi Sedang';
    } else {
      res = 'Depresi Berat';
    }
    const path = `/history/${userId}/`;
    const id = Date.now();
    const value = {
      date: showFormattedDateID(Date.now()),
      status: res,
      score: scoreValue,
    };

    await createResult.pushValue(path, value, id);
    setHistoryTestId(id);
  };

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
        <ConfirmTest createResult={createNewResult} handleBackToTest={handleBackToTest} />
      ) : (
        <div className="test-container">
          <Question
            dataQuestions={dataQuestions}
            showResult={showResult}
            currentQuestion={currentQuestion}
            createResult={createResult}
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
