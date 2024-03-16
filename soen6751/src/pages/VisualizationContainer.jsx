import React from 'react';
import PropTypes from 'prop-types';
import Visualization from './Visualization'
import img1 from '../assets/img/placeholder1.png';
import img2 from '../assets/img/placeholder2.png';
import img3 from '../assets/img/placeholder3.png';

export default function VisualizationContainer({visualizationIndex}) {
    const visualizations = [img1, img2, img3]
    
    return (
        <div className='visualizationcontainer'>
            <h2>Visualization</h2>
            <Visualization image={visualizations[visualizationIndex]} />
        </div>
    )
}

VisualizationContainer.propTypes = {
    visualizationIndex: PropTypes.number.isRequired,
}
