import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Skill from '../skill';
import skills from './skills';
import './index.css';

class About extends Component {
  render() {
    return (
      <div>
        <div
          id="header"
          className="flex flex-col px-4 pt-32 h-mobile-screen-nav sm:pt-64"
        >
          <div className="container flex flex-col flex-grow h-full mx-auto mb-16">
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
              <div className="flex flex-col items-center flex-grow lg:flex-row">
                <div>
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
                      , I began my current job as a Graduate Developer working
                      on developing and maintaining APIs for our partners.
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center flex-grow w-full lg:ml-24">
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
          className="flex flex-col px-4 border-b-2 border-gray-200 h-mobile-screen"
        >
          <div className="container flex flex-col flex-grow mx-auto">
            <div className="flex flex-col">
              <p className="flex items-center mt-4 mb-8 text-2xl font-bold whitespace-no-wrap heading md:text-3xl">
                Skills
              </p>
            </div>
            <div className="flex flex-grow md:tems-center">
              <div className="flex flex-row flex-wrap justify-between">
                {skills.sort(compare).map((skill) => {
                  return (
                    <Skill
                      name={skill.name}
                      icon={skill.icon}
                      iconStyle={skill.iconStyle}
                      level={skill.level}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function compare(a, b) {
  if (a.level > b.level) {
    return -1;
  }
  if (a.level < b.level) {
    return 1;
  }
  return 0;
}

export default About;
