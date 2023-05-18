import React, { useState } from 'react';
import gameConfig from '../gameConfig.json';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/reducers/rootReducer';
import { GAME_FINISH } from '../constants/path';
import { AnswerCorrect } from '../store/actions/AswerCorrect';
import '../styles/questionStyle.scss';
import { AnswerWrong } from '../store/actions/AswerWrong';

const Question = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const currentQuestion = gameConfig.questions[currentQuestionIndex];
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { answer } = useSelector((state: RootState) => state);

  const handleAnswer = (answer: string) => {
    setTimeout(() => {
      setIsCorrect(answer === currentQuestion.correctAnswer);
      setTimeout(() => {
        if (answer === currentQuestion.correctAnswer) {
          dispatch(AnswerCorrect(answer));
          setCurrentQuestionIndex(currentQuestionIndex + 1);
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
