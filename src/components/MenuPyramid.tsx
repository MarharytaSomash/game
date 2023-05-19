import React, { useEffect, useState } from 'react';
import '../styles/menuPyramidStyle.scss';
import gameConfig from '../gameConfig.json';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers/rootReducer';

const MenuPyramid = () => {
  const { numberQuestion } = useSelector((state: RootState) => state);
  const { earnedMoney } = useSelector((state: RootState) => state);
  const reversedPyramidMoney = [...gameConfig.pyramidMoney].reverse();
  return (
    <>
      <ul className="piramid-money-wrapper">
        {reversedPyramidMoney.map((item) => (
          <li key={item.id} className="piramid-money-list">
            <span
            // className={
            //   numberQuestion === item.id ? 'piramid-money-amount-active' : 'piramid-money-amount'
            // }
            >
              ${item.amount}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MenuPyramid;
