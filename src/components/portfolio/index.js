import React, { Component } from 'react';
import Projects from './projects';
import Project from '../project';

class Portfolio extends Component {
  render() {
    return (
      <div classname="bg-gray-100">
        <div className="px-4 pt-8 container mx-auto">
          <div className=" flex flex-col flex-wrap lg:-mx-16 lg:flex-row">
            {Projects.map((project) => {
              return (
                <Project
                  image={project.image}
                  name={project.name}
                  text={project.text}
                  tags={project.tags}
                  github={project.github}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
