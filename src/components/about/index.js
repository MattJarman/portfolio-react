import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Progress from '../progress';
import './index.css';

class Projects extends Component {
  render() {
    return (
      <div>
        <div
          id="header"
          className="flex flex-col px-4 pt-32 h-mobile-screen-nav sm:pt-64"
        >
          <div className="flex flex-grow flex-col h-full container mx-auto">
            <p className="text-4xl font-bold sm:text-6xl">Matthew Jarman</p>
            <p className="text-2xl font-bold text-gray-500 mb-4 sm:text-4xl">
              Software Developer
            </p>
            <NavLink
              activeClassName="lg:border-b-2 active"
              className="bg-paradise-pink-500 w-24 text-center hover:bg-paradise-pink-600 text-white font-bold py-2 px-4 shadow-md"
              to={{
                pathname: '/portfolio',
                state: { prevPath: '/' },
              }}
            >
              Portfolio
            </NavLink>
          </div>
          <div className="flex justify-center">
            <AnchorLink href="#me" className="focus:outline-none">
              <FontAwesomeIcon
                className="outline-none text-paradise-pink-500"
                icon="angle-down"
                size="4x"
              />
            </AnchorLink>
          </div>
        </div>
        <div
          id="me"
          className="flex flex-col px-4 h-mobile-screen bg-cultured-gray border-t-2 border-b-2 border-gray-200"
        >
          <div className="flex flex-col flex-grow container mx-auto">
            <div className="flex flex-col flex-grow">
              <p className="text-4xl mt-4 mb-8 font-bold border-b-2 sm:mb-0">
                ME
              </p>
              <div className="flex flex-col flex-grow sm:justify-center sm:items-center lg:flex-row">
                <div className="flex justify-center w-full lg:w-1/3">
                  <img
                    className="rounded-full w-32 h-32 my-4 shadow-md mx-8 mb-8 sm:mx-16 md:w-72 md:h-72 lg:mb-0"
                    src={`${process.env.PUBLIC_URL}/img/me.jpg`}
                  />
                </div>

                <div className="sm:w-2/3">
                  <p className="text-3xl font-bold text-black md:text-5xl lg:text-6xl">
                    Hey, my name is Matt.
                  </p>
                  <p className="text-xl font-bold text-gray-700 md:text-3xl lg:text-4xl">
                    I'm a software developer from North Wales with a
                    specialisation in back-end development.
                  </p>
                  <p className="text-base text-gray-500 md:text-xl lg:text-2xl">
                    Shortly after graduating from Bangor University, I joined
                    the technology team at Sykes Cottages where I currently work
                    on partner integration.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <AnchorLink href="#experience" className="focus:outline-none">
                <FontAwesomeIcon
                  className="outline-none text-paradise-pink-500"
                  icon="angle-down"
                  size="4x"
                />
              </AnchorLink>
            </div>
          </div>
        </div>
        <div
          id="experience"
          className="flex flex-col w-full h-mobile-screen px-4"
        >
          <div className="flex flex-col container mx-auto">
            <p className="text-4xl mt-4 mb-8 font-bold border-b-2 md:mb-40">
              EXPERIENCE
            </p>
            <div className="flex flex-col h-full sm:flex-row">
              <div className="flex flex-col w-full mb-8 sm:w-1/2 sm:mb-0 sm:mr-8">
                <Progress text="JavaScript" width="90%" />
                <Progress text="NodeJS" width="85%" />
                <Progress text="PHP" width="75%" />
                <Progress text="MySQL" width="70%" />
                <Progress text="Laravel" width="65%" />
                <Progress text="MongoDB" width="60%" />
                <Progress text="React" width="40%" />
                <Progress text="Java" width="40%" />
              </div>
              <div className="flex flex-row flex-wrap h-1/2 sm:w-1/2">
                <div className="flex w-1/2 mb-2 justify-center">
                  <img
                    src={`${process.env.PUBLIC_URL}/icons/solid-alternative.svg`}
                    alt="S.O.L.I.D"
                    className="skill-icon w-24 lg:w-40"
                  />
                </div>
                <div className="flex w-1/2 mb-2 justify-center">
                  <img
                    src={`${process.env.PUBLIC_URL}/icons/tdd.svg`}
                    alt="Test Driven Development"
                    className="skill-icon w-24 lg:w-40"
                  />
                </div>
                <div className="flex w-full justify-center">
                  <img
                    src={`${process.env.PUBLIC_URL}/icons/agile.svg`}
                    alt="Agile"
                    className="skill-icon w-24 lg:w-40"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
