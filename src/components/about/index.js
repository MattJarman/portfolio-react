import React, { Component } from "react";
import AbsoluteWrapper from "../absolute-wrapper";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Projects extends Component {
  render() {
    return (
      <AbsoluteWrapper>
        <div className="mt-8 sm:mt-16">
          <div className="flex flex-row container mx-auto">
            <div className="flex-grow">
              <p className="text-xl sm:text-6xl">About Me</p>
              <p className="text-xl sm:text-4xl text-gray-500">
                I'm a skeep-beep de bop-bop beep bop bo-dope
              </p>
              <p className="text-lg sm:text-3xl text-gray-400">
                And I love the bop
              </p>
            </div>
            <img
              class="rounded-full self-center float-left w-24 h-24 sm:w-84 sm:h-84 mx-8 sm:mx-16 shadow-md"
              src={`${process.env.PUBLIC_URL}/img/me.jpg`}
            />
          </div>
          <div className="w-full flex justify-center">
            <FontAwesomeIcon
              className="outline-none"
              icon={["fab", "js"]}
              size="10x"
            />
          </div>
        </div>
      </AbsoluteWrapper>
    );
  }
}

export default Projects;
