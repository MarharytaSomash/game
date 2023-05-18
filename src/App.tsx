import React from 'react';
import GameFinish from './pages/GameFinish';
import GameStart from './pages/GameStart';
import NotFoundPage from './pages/NotFoundPage';
import GamePage from './pages/GamePage';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Routes>
      <Route index element={<GameStart />} />
      <Route path="game" element={<GamePage />} />
      <Route path="game_finish" element={<GameFinish />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
