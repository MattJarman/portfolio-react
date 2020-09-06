import React, { useContext, useEffect, useState } from 'react';
import { Route, __RouterContext } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { sql, mongodb } from '../icons';
import {
  faBars,
  faSquare,
  faAngleDown,
  faCaretLeft,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { slideLeft, slideRight } from './slide-animation';
import Portfolio from '../portfolio';
import About from '../about';
import Navbar from '../navbar';
import './index.css';
import '../../index.css';

library.add(
  fab,
  faBars,
  faSquare,
  faAngleDown,
  faCaretLeft,
  faStar,
  farStar,
  sql,
  mongodb
);

function App() {
  const context = useContext(__RouterContext);
  const { location } = context;
  const prevState = location.state;
  const [vh, setVh] = useState(0);

  let slide = slideRight;

  if (prevState !== undefined) {
    let prevPath = prevState.prevPath;
    if (prevPath === '/portfolio') {
      slide = slideLeft;
    }
  }

  useEffect(() => {
    updateVh();
    window.addEventListener('resize', updateVh);

    return () => {
      window.removeEventListener('resize', updateVh);
    };
  }, []);

  function updateVh() {
    const vh = window.innerHeight * 0.01;
    setVh(vh);
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  return (
    <>
      <div className="h-screen mt-0">
        <Navbar />
        <main className="flex-grow">
          <AnimatedSwitch {...slide}>
            <Route exact path="/" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
          </AnimatedSwitch>
        </main>
      </div>
    </>
  );
}

export default App;
