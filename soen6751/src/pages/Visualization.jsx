import React from 'react'
import PropTypes from 'prop-types';

export default function Visualization({ image }) {
    return (
        <div className='imgcontainer'>
            <img src = {image} alt="" />
        </div>
    )
}

Visualization.propTypes = {
    image: PropTypes.string.isRequired
}