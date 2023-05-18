import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GAME_START } from '../constants/path';
import '../styles/gameFinishStyle.scss';

function GameFinish() {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  const handleClick = () => {
    navigate(GAME_START);
    // setActive(true);
  };
  return (
    <div className="finish-page-wrapper">
      <div className="wrapper-img">
        <img src={process.env.PUBLIC_URL + '/img/hand_desktop.png'} alt="icon-hand" />
      </div>
      <div className="wrapper-info">
        <h1>Total score:</h1>
        <button onClick={handleClick} className={active ? 'active' : ''}>
          Try again
        </button>
      </div>
    </div>
  );
}

export default GameFinish;
