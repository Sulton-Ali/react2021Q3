import React, {useState} from 'react';
import Lottie from 'react-lottie-player';
import {NavLink} from 'react-router-dom';
import newsLottie from '../../assets/lotties/news.json';

import './header.scss';

function Header(): JSX.Element {
  return (
    <div className="header">
      <div className="header__logo">
        <Lottie
          loop
          play
          animationData={newsLottie}
          style={{
            width: 100,
            height: 50,
            alignSelf: 'center',
          }}
          className="news-lottie"
        />
      </div>
      <div className="header__content">
        <nav className="header__nav navigation">
          <ul className="navigation__list">
            <li className="navigation__item">
              <NavLink to="/" exact activeClassName="navigation__item--active">
                Home
              </NavLink>
            </li>
            <li className="navigation__item">
              <NavLink
                to="/about"
                exact
                activeClassName="navigation__item--active">
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
