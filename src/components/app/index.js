import React, { useContext, useEffect, useState } from 'react';
import { Route, __RouterContext } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faBars,
  faLightbulb,
  faSquare,
  faAngleDown,
  faCaretLeft,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { faClone as farClone } from '@fortawesome/free-regular-svg-icons';
import { slideLeft, slideRight } from './slide-animation';
import Portfolio from '../portfolio';
import Contact from '../contact';
import About from '../about';
import Navbar from '../navbar';
import Footer from '../footer';
import './index.css';
import '../../tailwind.css';

library.add(
  fab,
  faBars,
  faLightbulb,
  faSquare,
  faAngleDown,
  farClone,
  faCaretLeft,
  faEnvelope
);

function App() {
  const context = useContext(__RouterContext);
  const { location } = context;
  const prevState = context.history.location.state;
  const [vh, setVh] = useState(0);

  let slide = slideRight;

  if (prevState !== undefined) {
    let prevPath = prevState.prevPath;
    if (
      (prevPath === '/portfolio' && location.pathname === '/') ||
      prevPath === '/contact'
    ) {
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
      <div className="h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <AnimatedSwitch {...slide}>
            <Route exact path="/" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
          </AnimatedSwitch>
        </main>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
