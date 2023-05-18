import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GAME } from '../constants/path';
import '../styles/gameStartStyle.scss';

function GameStart() {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  const handleClick = () => {
    navigate(GAME);
    setActive(true);
  };
  return (
    <div className="page-wrapper">
      <div className="wrapper-img">
        <img src={process.env.PUBLIC_URL + '/img/hand_desktop.png'} alt="icon-hand" />
      </div>
      <div className="wrapper-info">
        <h1>Who wants to be a millionaire?</h1>
        <button onClick={handleClick} className={active ? 'active' : ''}>
          {' '}
          Start{' '}
        </button>
      </div>
    </div>
  );
}

export default GameStart;
