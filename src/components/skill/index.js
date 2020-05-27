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
      <div className="flex flex-col items-center justify-center w-24 mx-auto">
        <FontAwesomeIcon
          className="mb-2 text-4xl text-black outline-none"
          icon={this.props.icon}
        />
        <p className="text-sm font-bold">{this.props.name}</p>
        <p className="text-xs italic text-gray-700">{this.proficieny}</p>
        <Rating
          className="mb-8 text-xs text-paradise-pink-500"
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
