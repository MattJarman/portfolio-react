import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './index.css';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      copied: false,
      hidden: true,
    };
  }

  render() {
    return (
      <div>
        <div className="px-8 pt-4 text-center">
          <p className="text-6xl">Contact</p>
          <div className="flex flex-col mt-8">
            <div className="flex flex-row items-center justify-center">
              <FontAwesomeIcon className="mr-4" icon="envelope" size="2x" />
              <p className="text-lg pr-2 text-gray-700">
                mattjarman22@outlook.com
              </p>
              <CopyToClipboard
                onCopy={() => this.setState({ copied: true })}
                text="mattjarman22@outlook.com"
              >
                <button className="relative outline-none focus:outline-none">
                  <FontAwesomeIcon
                    className="text-blue"
                    icon={['far', 'clone']}
                    size="1x"
                  />
                </button>
              </CopyToClipboard>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
