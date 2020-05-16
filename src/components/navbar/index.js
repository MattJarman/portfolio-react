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
      <nav className="flex items-center justify-between flex-wrap p-2 bg-paradise-pink-500 shadow-md sticky top-0 z-10">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">
            Matthew Jarman
          </span>
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 rounded text-white hover:text-white outline-none focus:outline-none"
            onClick={toggleHidden}
          >
            <FontAwesomeIcon className="outline-none" icon="bars" />
          </button>
        </div>
        <div className="w-full sticky top-0 sm:flex sm:items-center sm:w-auto">
          <div className="lg:flex-grow"></div>
          <div
            className={`transition duration-500 ease-in-out sm:block ${
              hidden ? 'hidden' : ''
            }`}
          >
            <NavLink
              exact={true}
              activeClassName="lg:border-b-2 active"
              className="block mt-4 lg:inline-block lg:mt-0 text-paradise-pink-100 active:text-white hover:text-white mr-6 outline-none"
              onClick={hide}
              to={{ pathname: '/', state: { prevPath: location.pathname } }}
            >
              Portfolio
            </NavLink>
            <NavLink
              activeClassName="lg:border-b-2 active"
              className="block mt-4 lg:inline-block lg:mt-0 text-paradise-pink-100 hover:text-white mr-6 outline-none"
              onClick={hide}
              to={{
                pathname: '/projects',
                state: { prevPath: location.pathname },
              }}
            >
              About
            </NavLink>
            <NavLink
              activeClassName="lg:border-b-2 active"
              className="block mt-4 lg:inline-block lg:mt-0 text-paradise-pink-100 hover:text-white mr-6 outline-none"
              onClick={hide}
              to={{
                pathname: '/about',
                state: { prevPath: location.pathname },
              }}
            >
              Contact
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
