import React from 'react';
import '../styles/iconLikeStyle.scss';

function IconLike() {
  return (
    <div className="wrapper-img">
      <img src={process.env.PUBLIC_URL + '/img/hand_desktop.png'} alt="icon-hand" />
    </div>
  );
}

export default IconLike;
