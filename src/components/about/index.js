import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Progress from "../progress";
import "./index.css";

class Projects extends Component {
  render() {
    return (
      <div className="">
        <div className="flex flex-col px-4 pt-8 h-view-nav">
          <div className="flex flex-col flex-grow">
            <img
              className="rounded-full self-center w-32 h-32 my-4 shadow-md sm:w-72 sm:h-72 mx-8 sm:mx-16"
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
            <a href="#skills" className="focus:outline-none">
              <FontAwesomeIcon
                className="outline-none text-paradise-pink-500"
                icon="angle-down"
                size="4x"
              />
            </a>
          </div>
        </div>
        <div
          id="skills"
          className="flex flex-col w-full h-screen px-8 bg-cultured-gray border-t-2 border-gray-200"
        >
          <div className="flex flex-col flex-grow container mx-auto">
            <p className="text-4xl mt-8 mb-8 font-bold border-b-2 sm:mb-40">
              SKILLS
            </p>
            <div className="flex flex-col sm:flex-row">
              <div className="flex flex-col w-full mb-16 sm:w-1/2 sm:mb-0 sm:mr-8">
                <Progress text="JavaScript" width="90%" />
                <Progress text="NodeJS" width="85%" />
                <Progress text="PHP" width="75%" />
                <Progress text="MySQL" width="70%" />
                <Progress text="Laravel" width="65%" />
                <Progress text="MongoDB" width="60%" />
                <Progress text="React" width="40%" />
                <Progress text="Java" width="40%" />
              </div>
              <div className="flex flex-row sm:w-1/2">
                <div className="flex flex-grow sm:flex-grow-0 sm:w-1/2 sm:justify-center">
                  <img
                    src={`${process.env.PUBLIC_URL}/icons/solid-alternative.svg`}
                    alt="S.O.L.I.D"
                    className="skill-icon w-32"
                  />
                </div>
                <div className="flex sm:w-1/2 sm:justify-center">
                  <img
                    src={`${process.env.PUBLIC_URL}/icons/tdd.svg`}
                    alt="TDD"
                    className="skill-icon w-32"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <a href="#interests" className="focus:outline-none">
              <FontAwesomeIcon
                className="outline-none text-paradise-pink-500"
                icon="angle-down"
                size="4x"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
