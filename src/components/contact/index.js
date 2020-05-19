import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./index.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      copied: false,
      hidden: true,
    };
  }

  render() {
    return (
      <div className="flex flex-col px-4">
        <p className="text-4xl mt-8 mb-8 font-bold border-b-2 sm:mb-0">
          CONTACT
        </p>
        <div className="flex flex-col">
          <div className="flex flex-row">
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
                  icon={["far", "clone"]}
                  size="1x"
                />
              </button>
            </CopyToClipboard>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
