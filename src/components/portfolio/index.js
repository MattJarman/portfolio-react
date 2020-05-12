import React, { Component } from 'react';
import AbsoluteWrapper from '../absolute-wrapper';
import ImageCarousel from '../image-carousel';

class Portfolio extends Component {
    render() {
        return (
            <AbsoluteWrapper>
                <div>
                    <ImageCarousel/>
                </div>
            </AbsoluteWrapper>
        );
    }
}

export default Portfolio;