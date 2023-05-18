import React from 'react';
import Question from '../components/Question';
import MenuPyramid from '../components/MenuPyramid';
import '../styles/gamePageStyle.scss';

function GamePage() {
  return (
    <div className="game-page-wrapper">
      <Question />
      <MenuPyramid />
    </div>
  );
}

export default GamePage;
