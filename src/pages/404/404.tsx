import React from 'react';
import Lottie from 'react-lottie-player';

import notFound from '../../assets/lotties/404.json';

import './404.scss';

export default function PageNotFound(): JSX.Element {
  return (
    <div className="page-not-found">
      <Lottie
        loop
        play
        animationData={notFound}
        className="page-not-found__lottie"
      />
    </div>
  );
}
