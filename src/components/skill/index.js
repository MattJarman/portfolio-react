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
        <FontAwesomeIcon
          className="mb-4 text-4xl transition duration-300 ease-in-out transform outline-none cursor-pointer focus:outline-none md:text-6xl"
          icon={this.props.icon}
        />
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
