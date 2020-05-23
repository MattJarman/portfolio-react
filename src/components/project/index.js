import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactMarkdown from 'react-markdown';
import './index.css';

class Project extends Component {
  List(props) {
    return (
      <ul className="list-disc ml-4 py-4 text-xs sm:text-base">
        {props.children}
      </ul>
    );
  }

  Link(props) {
    return (
      <a
        className="no-underline hover:underline text-blue-700"
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.children}
      </a>
    );
  }

  render() {
    return (
      <div className="w-full lg:w-1/2 px-4 py-4">
        <div class="project rounded overflow-hidden shadow-md bg-white">
          <img
            src={this.props.image}
            alt="Steam Organiser"
            className="w-full"
          />
          <div class="px-6 py-4 max-h-lg min-h-32 lg:min-h-64">
            <div class="font-bold text-2xl mb-2 sm:text-3xl ">
              {this.props.name}
            </div>
            <div class="text-gray-700 text-xs sm:text-base">
              <ReactMarkdown
                source={this.props.text}
                renderers={{ list: this.List, link: this.Link }}
                parserOptions={{ commonmark: true }}
              />
            </div>
          </div>
          <div class="flex flex-row px-6 py-4">
            <div className="tags w-2/3 space-y-4 flex-grow">
              {this.props.tags.map((tag) => {
                return (
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 sm:text-sm">
                    {tag}
                  </span>
                );
              })}
            </div>
            <div className="mt-auto">
              <a
                href={this.props.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="transition duration-300 ease-in-out transform cursor-pointer hover:-translate-y-1 hover:scale-110 hover:text-github outline-none focus:outline-none"
                  icon={['fab', 'github']}
                  size="2x"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
