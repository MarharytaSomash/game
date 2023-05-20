import React, { useState } from 'react';
import Question from '../components/Question';
import MenuPyramid from '../components/MenuPyramid';
import '../styles/gamePageStyle.scss';

function GamePage() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <>
      {window.innerWidth <= 768 ? (
        <div className={`game-page-wrapper ${isMenuOpen ? 'menu-open' : ''}`}>
          {isMenuOpen ? <MenuPyramid /> : <Question />}
        </div>
      ) : (
        <div className={`game-page-wrapper ${isMenuOpen ? 'menu-open' : ''}`}>
          <Question />
          <MenuPyramid />
        </div>
      )}
      <button
        className={`burger-menu ${isMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <img
          src={process.env.PUBLIC_URL + (isMenuOpen ? '/img/close.png' : '/img/open.png')}
          alt="menu_icon"
        />
      </button>
    </>
  );
}

export default GamePage;
