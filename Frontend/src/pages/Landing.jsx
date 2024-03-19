import React, {useState, useEffect} from 'react'

import PropTypes from 'prop-types';
import BarGraph from './BarGraph';
import PieChart from './PieChart';

export default function Landing({ totalVisualizations = 2 }) {
    const [current, setCurrent] = useState(0);
    const [data, setData] = useState(null);

    const handleNext = () => {
        setCurrent((prev) => prev + 1);
    }

    const handleBack = () => {
        setCurrent((prev) => prev - 1);
    }
    useEffect(() => {
        fetch('http://127.0.0.1:5000/runtrain')
          .then(response => response.json())
          .then(json => {setData(json); console.log(json);})
          .catch(error => console.error(error));
      }, []);
    return (
        data ? 
        <div className='Landing'>
            { current == 0 ? <PieChart data = {data}/> : <BarGraph data={data}/> }
            <p>{data.Q1}</p>
            <p>{data.Q2}</p>
            <div className="controls">
                <button onClick={handleBack} disabled={current === 0}>
                    Back
                </button>
                <button onClick={handleNext} disabled={current === totalVisualizations - 1}>
                    Next
                </button>
            </div>    
        </div>
        : 
        <h1>LOADING.....</h1>
    )
}

Landing.propTypes = {
    totalVisualizations : PropTypes.number.isRequired,
};
