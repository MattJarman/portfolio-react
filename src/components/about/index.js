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
          <div className="container flex flex-col flex-grow h-full mx-auto">
            <p className="text-4xl font-bold sm:text-6xl">Matthew Jarman</p>
            <p className="mb-4 text-2xl font-bold text-gray-500 sm:text-4xl">
              Software Developer
            </p>
            <NavLink
              activeClassName="lg:border-b-2 active"
              className="w-24 px-4 py-2 font-bold text-center text-white shadow-md bg-paradise-pink-500 hover:bg-paradise-pink-600"
              to={{
                pathname: '/portfolio',
                state: { prevPath: '/' },
              }}
            >
              Portfolio
            </NavLink>
          </div>
          <div className="flex justify-center">
            <AnchorLink href="#about" className="focus:outline-none">
              <FontAwesomeIcon
                className="outline-none text-paradise-pink-500"
                icon="angle-down"
                size="4x"
              />
            </AnchorLink>
          </div>
        </div>
        <div
          id="about"
          className="flex flex-col px-4 border-t-2 border-b-2 border-gray-200 h-mobile-screen bg-cultured-gray"
        >
          <div className="container flex flex-col flex-grow mx-auto md:px-8">
            <div className="flex flex-col flex-grow">
              <div className="flex flex-col items-center flex-grow lg:flex-row lg:mx-32">
                <div className="lg:w-2/3">
                  <p className="flex items-center mt-4 mb-8 text-2xl font-bold whitespace-no-wrap heading md:text-3xl">
                    About Me
                  </p>
                  <div>
                    <p className="mb-4 text-base text-gray-700 md:text-xl">
                      Hey! I'm Matt, a software developer from North Wales, UK.
                    </p>
                    <p className="mb-4 text-base text-gray-700 md:text-xl">
                      I enjoy finding efficient solutions to complex problems,
                      and creating useful applications that can help make
                      people's lives easier.
                    </p>
                    <p className="text-base text-gray-700 md:text-xl">
                      After graduating from{' '}
                      <a
                        className="text-blue-700 no-underline hover:underline"
                        href="https://www.bangor.ac.uk/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Bangor University
                      </a>
                      , I joined the Technology team at{' '}
                      <a
                        className="text-blue-700 no-underline hover:underline"
                        href=" https://www.sykescottages.co.uk/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Sykes Cottages
                      </a>{' '}
                      to work on developing and maintaining APIs for our
                      partners.
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center w-full h-full lg:w-1/3 lg:ml-24">
                  <img
                    className="w-1/2 h-auto mx-8 my-4 mb-8 rounded-full shadow-md sm:mx-16 md:w-72 md:h-72 lg:mb-0"
                    src={`${process.env.PUBLIC_URL}/img/me.jpg`}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <AnchorLink href="#skills" className="focus:outline-none">
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
          id="skills"
          className="flex flex-col px-4 border-t-2 border-b-2 border-gray-200 h-mobile-screen bg-cultured-gray"
        >
          <div className="container flex flex-col flex-grow mx-auto">
            <div className="flex flex-col flex-grow">
              <p className="flex items-center mt-4 mb-8 text-2xl font-bold whitespace-no-wrap heading md:text-3xl">
                Skills
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
