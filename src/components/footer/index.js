import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <footer className="fixed bottom-0 md:opacity-25 sm:opacity-100 hover:opacity-100 w-full transition duration-300 ease-in-out">
      <div className="flex p-2">
        <div>
          {/* Dark mode toggle */}
          <button className="mr-2 outline-none">
            <FontAwesomeIcon
              className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-yellow-500 outline-none focus:outline-none"
              icon="lightbulb"
              size="2x"
            />
          </button>
        </div>
        <div className="fixed right-0">
          <a
            className="mr-2 cursor-pointer outline-none"
            target="_blank"
            href="https://www.linkedin.com/in/matthew-jarman-231114193/"
          >
            <FontAwesomeIcon
              className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-linkedin outline-none focus:outline-none"
              icon={['fab', 'linkedin']}
              size="2x"
            />
          </a>
          <a
            className="mr-2 cursor-pointer outline-none"
            target="_blank"
            href="https://github.com/MattJarman/"
          >
            <FontAwesomeIcon
              className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-github outline-none focus:outline-none"
              icon={['fab', 'github']}
              size="2x"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
