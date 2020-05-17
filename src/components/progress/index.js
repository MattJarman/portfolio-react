import React, { Component } from 'react';
import './index.css';

class Progress extends Component {
  render() {
    return (
      <div className="bar flex w-full mb-2 sm:mb-4">
        <div className="py-1 bg-paradise-pink-100 w-24 text-xs sm:text-sm font-bold text-center">
          <span>{this.props.text}</span>
        </div>
        <div className="bar w-full bg-gray-300 shadow-md">
          <div className="h-full" style={{ width: this.props.width }}>
            <div className="bar-fill bg-paradise-pink-500 w-full leading-none h-full transition-width duration-300"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Progress;
