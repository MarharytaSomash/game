import React, { useEffect, useState } from 'react';
import '../styles/menuPyramidStyle.scss';
import gameConfig from '../gameConfig.json';
import Question from './Question';

const MenuPyramid = () => {
  const [questionNumber, setQuestionNumber] = useState<number>(1);

  return (
    <>
      <ul className="piramid-money-wrapper">
        {gameConfig.pyramidMoney.reverse().map((item) => (
          <li key={item.id} className="piramid-money-list">
            <span
              className={
                questionNumber === item.id ? 'piramid-money-omount-active' : 'piramid-money-omount'
              }>
              {item.amount}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MenuPyramid;
