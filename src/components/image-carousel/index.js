import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './index.css';

class ImageCarousel extends Component {
    constructor(props) {
        super(props);
        console.log(props.renderItem);
    }
    render() {
        return (
            <Carousel className="shadow-md" showArrows={true} showThumbs={false} autoPlay={true} showStatus={false}>
                <div>
                    <img src={`${process.env.PUBLIC_URL}/img/pokedot.png`} alt="Pokédot" />
                    <p className="legend">Pokédot</p>
                </div>
                <div>
                    <img src={`${process.env.PUBLIC_URL}/img/steam-library-organiser.png`} alt="Pokedot" />
                    <p className="legend">Steam Organiser</p>
                </div>
            </Carousel>
        );
    }
}

export default ImageCarousel;