import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <footer className="bg-paradise-pink-500">
      <div className="flex items-center justify-center h-32 p-2">
        <a
          className="mr-2 outline-none cursor-pointer"
          target="_blank"
          href="https://www.linkedin.com/in/matthew-jarman-231114193/"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className="transition duration-300 ease-in-out transform outline-none hover:-translate-y-1 hover:scale-110 hover:text-linkedin focus:outline-none"
            icon={['fab', 'linkedin']}
            size="2x"
          />
        </a>
        <a
          className="mr-2 outline-none cursor-pointer"
          target="_blank"
          href="https://github.com/MattJarman/"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className="transition duration-300 ease-in-out transform outline-none hover:-translate-y-1 hover:scale-110 hover:text-github focus:outline-none"
            icon={['fab', 'github']}
            size="2x"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
