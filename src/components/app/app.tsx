import React from 'react';
import {useTransition, animated} from 'react-spring';
import {Route, Switch, useLocation} from 'react-router-dom';

import Header from '../header/header';
import HomePage from '../../pages/home/homePage';
import About from '../../pages/about/about';
import './app.scss';

function App(): JSX.Element {
  const location = useLocation();

  const transitions = useTransition(location, {
    from: {opacity: 0},
    enter: {opacity: 1},
    leave: {opacity: 0},
  });
  return (
    <div className="app">
      <Header />
      <div className="app-main">
        {transitions((props, item) => (
          <animated.div className="page-wrapper" style={props}>
            <Switch location={item}>
              <Route path="/" exact>
                <HomePage />
              </Route>
              <Route path="/about" exact>
                <About />
              </Route>
            </Switch>
          </animated.div>
        ))}
      </div>
    </div>
  );
}

export default App;
