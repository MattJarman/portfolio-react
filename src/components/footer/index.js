import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
    return (
        <footer>
            <div className="flex flex-grow p-2">
                <div className="flex-grow">
                </div>
                <div>
                    <a className="mr-2 cursor-pointer outline-none" target="_blank" href="https://www.linkedin.com/in/matthew-jarman-231114193/">
                        <FontAwesomeIcon className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-linkedin outline-none" icon={['fab', 'linkedin']} size="2x" />
                    </a>
                    <a className="mr-2 cursor-pointer outline-none" target="_blank" href='https://github.com/MattJarman/'>
                        <FontAwesomeIcon className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-github outline-none" icon={['fab', 'github']} size="2x" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;