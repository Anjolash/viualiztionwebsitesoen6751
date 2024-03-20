import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
const CircleGraph = ({ data }) => {

    const accuracy = 1 - (( data.datasets[0].data[1] + data.datasets[0].data[2] ) / (data.datasets[0].data[0] + data.datasets[0].data[1] + data.datasets[0].data[2]));

  return (
    <div>
        <h2>Circle Graph</h2>
        <div class="outercircle">
            <div class="innercircle" style={{width: 500*accuracy, height: 500*accuracy}}>
                <p class="textcircle">Accuracy: {(100*accuracy).toPrecision(4)}%</p>
            </div>
        </div>
    </div>
  );
}

export default CircleGraph;
