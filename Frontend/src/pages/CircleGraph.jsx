import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
const CircleGraph = ({ data }) => {

    const accuracy = 1 - (( data.datasets[0].data[1] + data.datasets[0].data[2] ) / (data.datasets[0].data[0] + data.datasets[0].data[1] + data.datasets[0].data[2]));

  return (
    <div>
        <h2 className='mt-4'>Circle Graph</h2>
        <div className="outercircle">
            <div className="innercircle" style={{width: 600*accuracy, height: 600*accuracy}}>
                <p className="textcircle">Accuracy: {(100*accuracy).toPrecision(4)}%</p>
            </div>
        </div>
    </div>
  );
}

export default CircleGraph;
