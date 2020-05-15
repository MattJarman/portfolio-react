import React, { useContext, useState } from "react";
import { NavLink, __RouterContext } from "react-router-dom";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  const context = useContext(__RouterContext);
  const { location } = context;

  const [hidden, setHidden] = useState(true);

  function toggleHidden() {
    setHidden(!hidden);
  }

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap p-4 bg-paradise-pink-500 shadow-lg">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">
            Matthew Jarman
          </span>
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 rounded text-white hover:text-white outline-none"
            onClick={toggleHidden}
          >
            <FontAwesomeIcon className="outline-none" icon="bars" />
          </button>
        </div>
        <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="lg:flex-grow"></div>
          <div
            className={`transition duration-500 ease-in-out ${
              hidden ? "hidden lg:block" : ""
            }`}
          >
            <NavLink
              exact={true}
              activeClassName="lg:border-b-2 active"
              className="block mt-4 lg:inline-block lg:mt-0 text-paradise-pink-100 active:text-white hover:text-white mr-6 outline-none"
              to={{ pathname: "/", state: { prevPath: location.pathname } }}
            >
              Portfolio
            </NavLink>
            <NavLink
              activeClassName="lg:border-b-2 active"
              className="block mt-4 lg:inline-block lg:mt-0 text-paradise-pink-100 hover:text-white mr-6 outline-none"
              to={{
                pathname: "/projects",
                state: { prevPath: location.pathname },
              }}
            >
              About
            </NavLink>
            <NavLink
              activeClassName="lg:border-b-2 active"
              className="block mt-4 lg:inline-block lg:mt-0 text-paradise-pink-100 hover:text-white mr-6 outline-none"
              to={{
                pathname: "/about",
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
