import React, { useContext } from 'react';
import {
    Route,
    Switch,
    __RouterContext
} from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Portfolio from '../portfolio';
import Contact from '../contact';
import About from '../about';
import Navbar from '../navbar';
import Footer from '../footer';
import './index.css'
import '../../tailwind.css';

library.add(fab, faBars,);

function App() {
    const context = useContext(__RouterContext);
    const { location } = context;
    const prevState = context.history.location.state;

    let transition = {
        from: '100%',
        leave: '-50%'
    }

    if (prevState !== undefined) {
        let prevPath = prevState.prevPath;
        if (
            prevPath === '/projects' && location.pathname === '/' ||
            prevPath === '/about'
        ) {
            transition.from = '-50%';
            transition.leave = '100%';
        }
    }

    const transitions = useTransition(location, location => location.pathname, {
        from: { opacity: 0, transform: `translate(${transition.from}, 0)` },
        enter: { opacity: 1, transform: `translate(0, 0)` },
        leave: { opacity: 0, transform: `translate(${transition.leave}, 0)` },
    });

    return (
        <>
            <div className="min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-grow container mx-auto pt-4">
                    {transitions.map(({ item, props, key }) => (
                        <animated.div key={key} style={props}>
                            <Switch location={item}>
                                <Route exact path="/" component={Portfolio} />
                                <Route exact path="/projects" component={About} />
                                <Route exact path="/about" component={Contact} />
                            </Switch>
                        </animated.div>
                    ))}
                </main>
                <Footer />
            </div>
        </>
    );
}

export default App;