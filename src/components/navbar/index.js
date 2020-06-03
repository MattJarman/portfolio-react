import React, { useContext, useState } from 'react';
import { NavLink, __RouterContext } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.css';

function Navbar() {
  const context = useContext(__RouterContext);
  const { location } = context;

  const [hidden, setHidden] = useState(true);

  function toggleHidden() {
    setHidden(!hidden);
  }

  function hide() {
    setHidden(true);
  }

  return (
    <>
      <nav className="z-10 flex flex-wrap items-center justify-between p-2 shadow-md bg-paradise-pink-500">
        <div className="flex items-center flex-shrink-0 mr-6 text-white">
          <span className="text-xl font-semibold tracking-tight">
            Matthew Jarman
          </span>
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 text-white rounded outline-none hover:text-white focus:outline-none"
            onClick={toggleHidden}
          >
            <FontAwesomeIcon className="outline-none" icon="bars" />
          </button>
        </div>
        <div className="sticky top-0 w-full lg:flex lg:items-center lg:w-auto">
          <div className="lg:flex-grow"></div>
          <div className={`lg:flex ${hidden ? 'hidden' : ''}`}>
            <NavLink
              exact={true}
              activeClassName="lg:border-b-2 active"
              className="block mt-4 mr-6 outline-none sm:inline-block sm:mt-0 text-paradise-pink-100 active:text-white hover:text-white"
              onClick={hide}
              to={{ pathname: '/', state: { prevPath: location.pathname } }}
            >
              Me
            </NavLink>
            <NavLink
              activeClassName="lg:border-b-2 active"
              className="block mt-4 mr-6 outline-none lg:inline-block lg:mt-0 text-paradise-pink-100 hover:text-white"
              onClick={hide}
              to={{
                pathname: '/portfolio',
                state: { prevPath: location.pathname },
              }}
            >
              Portfolio
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
