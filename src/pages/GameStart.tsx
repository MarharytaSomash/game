import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GAME } from '../constants/path';
import '../styles/gameStartStyle.scss';
import IconLike from '../components/IconLike';

function GameStart(): JSX.Element {
  const navigate = useNavigate();
  const [active, setActive] = useState<boolean>(false);

  const handleClick = (): void => {
    navigate(GAME);
    setActive(true);
  };
  return (
    <div className="page-wrapper">
      <IconLike />
      <div className="wrapper-info">
        <h1>Who wants to be a millionaire?</h1>
        <button onClick={handleClick} className={active ? 'active' : ''} type="button">
          {' '}
          Start{' '}
        </button>
      </div>
    </div>
  );
}

export default GameStart;
