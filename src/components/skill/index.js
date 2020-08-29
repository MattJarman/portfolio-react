import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Rating from 'react-rating';

class Skill extends Component {
  constructor(props) {
    super(props);
    this.getProficiencyText = this.getProficiencyText.bind(this);
    this.proficieny = this.getProficiencyText(props.level);
  }

  getProficiencyText(level) {
    switch (Math.floor(level)) {
      case 1:
        return 'Familiar';
      case 2:
        return 'Experienced';
      case 3:
        return 'Proficient';
      case 4:
        return 'Expert';
      default:
        return 'Experienced';
    }
  }

  render() {
    return (
      <div className="flex flex-col items-center justify-center w-24 mx-auto md:w-56">
        <div className="flex items-center justify-center w-10 h-10 mb-4 sm:w-16 sm:h-16 lg:w-20 lg:h-20">
          <img
            className="transition duration-300 ease-in-out transform outline-none cursor-pointer grayscale hover:full-colour focus:outline-none hover:-translate-y-1 hover:scale-105"
            src={`${process.env.PUBLIC_URL}/icons/${this.props.icon}`}
          ></img>
        </div>
        <p className="text-sm font-bold">{this.props.name}</p>
        <p className="text-xs italic text-gray-700">{this.proficieny}</p>
        <Rating
          className="mb-8 text-xs text-paradise-pink-500 md:text-base"
          initialRating={this.props.level}
          readonly
          start="0"
          stop="4"
          emptySymbol={<FontAwesomeIcon icon={['far', 'star']} />}
          fullSymbol={<FontAwesomeIcon icon="star" />}
        />
      </div>
    );
  }
}

export default Skill;
