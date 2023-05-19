import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GAME_START } from '../constants/path';
import { RootState } from '../store/reducers/rootReducer';
import { useSelector } from 'react-redux';
import '../styles/gameFinishStyle.scss';

function GameFinish() {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  const { earnedMoney } = useSelector((state: RootState) => state);
  const handleClick = () => {
    navigate(GAME_START);
  };
  return (
    <div className="finish-page-wrapper">
      <div className="wrapper-img">
        <img src={process.env.PUBLIC_URL + '/img/hand_desktop.png'} alt="icon-hand" />
      </div>
      <div className="wrapper-info">
        <h1>Total score:</h1>
        <p>{earnedMoney}</p>
        <button onClick={handleClick} className={active ? 'active' : ''}>
          Try again
        </button>
      </div>
    </div>
  );
}

export default GameFinish;
