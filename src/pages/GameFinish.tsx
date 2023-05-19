import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GAME_START } from '../constants/path';
import { ChangeNumberQuestion } from '../store/actions/ChangeNumberQuestion';
import { AddEarnedMoney } from '../store/actions/AddEarnedMoney';
import { RootState } from '../store/reducers/rootReducer';
import { useSelector } from 'react-redux';
import { FormattedNumber } from 'react-intl';

import '../styles/gameFinishStyle.scss';
import { useDispatch } from 'react-redux';

function GameFinish() {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  const { earnedMoney } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(ChangeNumberQuestion(0));
    dispatch(AddEarnedMoney('0'));
    navigate(GAME_START);
  };

  return (
    <div className="finish-page-wrapper">
      <div className="wrapper-img">
        <img src={process.env.PUBLIC_URL + '/img/hand_desktop.png'} alt="icon-hand" />
      </div>
      <div className="wrapper-info">
        <h1>Total score:</h1>
        <span className="earned">
          {parseFloat(earnedMoney) !== 0 ? (
            <FormattedNumber value={parseFloat(earnedMoney)} style="currency" currency="USD" />
          ) : (
            '$ 0'
          )}{' '}
          earned
        </span>

        <button onClick={handleClick} className={active ? 'active' : ''}>
          Try again
        </button>
      </div>
    </div>
  );
}

export default GameFinish;
