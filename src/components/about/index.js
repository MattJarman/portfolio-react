import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.css';

class Projects extends Component {
  render() {
    return (
      <div className="">
        <div className="flex flex-col px-4 pt-8 h-view-nav">
          <div className="flex flex-col flex-grow">
            <img
              class="rounded-full self-center w-32 h-32 my-4 shadow-md sm:w-84 sm:h-84 mx-8 sm:mx-16"
              src={`${process.env.PUBLIC_URL}/img/me.jpg`}
            />
            <div className="text-center">
              <p className="text-4xl sm:text-6xl">About Me</p>
              <p className="text-xl sm:text-4xl text-gray-500">
                I'm a skeep-beep de bop-bop beep bop bo-dope
              </p>
              <p className="text-lg sm:text-3xl text-gray-400">
                And I love the bop
              </p>
            </div>
          </div>
          <div className="flex justify-center sticky bottom-0">
            <a href="#experience" className="focus:outline-none">
              <FontAwesomeIcon
                className="outline-none text-paradise-pink-500"
                icon="angle-down"
                size="4x"
              />
            </a>
          </div>
        </div>
        <div
          id="experience"
          className="w-full h-screen flex flex-col px-4 bg-cultured-gray border-t-2 border-gray-200"
        >
          <p className="text-4xl text-center my-8">Experience</p>
          <div className="flex flex-row">
            <div className="fa-layers fa-fw w-32 h-32">
              <FontAwesomeIcon
                className="outline-none text-black"
                icon="square"
                size="8x"
              />
              <FontAwesomeIcon
                className="outline-none text-javascript"
                icon={['fab', 'js']}
                size="8x"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
