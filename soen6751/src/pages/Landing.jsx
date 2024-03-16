import React, {useState} from 'react'

import PropTypes from 'prop-types';
import VisualizationContainer from './VisualizationContainer';

export default function Landing({ totalVisualizations = 3 }) {
    const [current, setCurrent] = useState(0);

    const handleNext = () => {
        setCurrent((prev) => prev + 1);
    }

    const handleBack = () => {
        setCurrent((prev) => prev - 1);
    }
    return (
        <div className='Landing'>
            <VisualizationContainer
            totalVisualizations= {totalVisualizations}
                visualizationIndex = {current}
            />
            <p>Question one</p>
            <p>Question two</p>
            <div className="controls">
                <button onClick={handleBack} disabled={current === 0}>
                    Back
                </button>
                <button onClick={handleNext} disabled={current === totalVisualizations - 1}>
                    Next
                </button>
            </div>    
        </div>
    )
}

Landing.propTypes = {
    totalVisualizations : PropTypes.number.isRequired,
};
