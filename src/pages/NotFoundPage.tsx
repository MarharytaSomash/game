import React from 'react';
import { NavLink } from 'react-router-dom';
import { FC } from 'react';
import '../styles/notFoundPageStyle.scss';

const NotFoundPage: React.FC = () => {
  return (
    <div className="not-foud_page">
      This page doesn&apos;t exist... Go&nbsp;
      <NavLink to="/">
        <span> Start Game</span>
      </NavLink>
    </div>
  );
};

export default NotFoundPage;
