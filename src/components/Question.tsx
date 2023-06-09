import React, { useState } from 'react';
import gameConfig from '../gameConfig.json';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/reducers/rootReducer';
import { GAME_FINISH } from '../constants/path';
import { AnswerCorrect } from '../store/actions/AswerCorrect';
import { AnswerWrong } from '../store/actions/AswerWrong';
import { ChangeNumberQuestion } from '../store/actions/ChangeNumberQuestion';
import { AddEarnedMoney } from '../store/actions/AddEarnedMoney';
import '../styles/questionStyle.scss';

const Question = () => {
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { answer, numberQuestion } = useSelector((state: RootState) => state);
  const currentQuestion = gameConfig.questions[numberQuestion.id - 1];

  const handleAnswer = (answer: string): void => {
    setTimeout(() => {
      setIsCorrect(answer === currentQuestion.correctAnswer);
      setTimeout(() => {
        if (answer === currentQuestion.correctAnswer) {
          dispatch(AnswerCorrect(answer));
          if (numberQuestion.id === gameConfig.questions.length) {
            dispatch(ChangeNumberQuestion(0));
            navigate(GAME_FINISH);
          } else {
            dispatch(ChangeNumberQuestion(numberQuestion.id));
          }
          dispatch(AddEarnedMoney(gameConfig.pyramidMoney[numberQuestion.id - 1].amount));
          setIsCorrect(false);
        } else {
          dispatch(AnswerWrong(answer));
          setIsCorrect(false);
          navigate(GAME_FINISH);
        }
      }, 2000);
    }, 2000);
  };

  return (
    <div>
      {currentQuestion && (
        <div key={currentQuestion.id}>
          <h1 className="question">{currentQuestion.questionText}</h1>

          <ul className="hexagon-wrapper">
            {currentQuestion.answers.map((answer, index) => (
              <li key={index} className="hexagon">
                <button
                  onClick={() => handleAnswer(answer)}
                  className={`hexagon-button ${
                    isCorrect && answer === currentQuestion.correctAnswer
                      ? 'correct'
                      : isCorrect
                      ? 'wrong'
                      : ''
                  }`}>
                  {answer}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default Question;
