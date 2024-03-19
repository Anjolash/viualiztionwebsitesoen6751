import React, {useState, useEffect} from 'react'

import PropTypes from 'prop-types';
import BarGraph from './BarGraph';
import PieChart from './PieChart';

export default function Landing({ totalVisualizations = 2 }) {
    const [current, setCurrent] = useState(0);
    const [data, setData] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);
    const [responses, setResponses] = useState([]);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value)
        const selectedResponse = event.target.value;
        const responseIndex = current;

        setResponses(prevResponses => {
            const updatedResponses = [...prevResponses];
            updatedResponses[responseIndex] = selectedResponse;
            return updatedResponses
        })
    }

    const handleNext = () => {
        setCurrent((prev) => prev + 1);
    }

    const handleBack = () => {
        setCurrent((prev) => prev - 1);
    }

    const exportToCSV = () => {
        const csvContent = responses.map((response,index) => {
            return `"Visualization ${index + 1}", ${response}`;
        }).join('\n')

        console.log(csvContent)
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
            <p className='mt-4'>Did this visualization appear confusing to you? </p>
            <div className="options">
                <label>
                    <input 
                        type="radio"
                        value="0"
                        checked={selectedOption === '0'}
                        onChange={handleOptionChange}
                    />
                    0
                </label>
                <label>
                    <input 
                        type="radio"
                        value="1"
                        checked={selectedOption === '1'}
                        onChange={handleOptionChange}
                    />
                    1
                </label>
                <label>
                    <input 
                        type="radio"
                        value="2"
                        checked={selectedOption === '2'}
                        onChange={handleOptionChange}
                    />
                    2
                </label>
                <label>
                    <input 
                        type="radio"
                        value="3"
                        checked={selectedOption === '3'}
                        onChange={handleOptionChange}
                    />
                    3
                </label>
                <label>
                    <input 
                        type="radio"
                        value="4"
                        checked={selectedOption === '4'}
                        onChange={handleOptionChange}
                    />
                    4
                </label>
                <label>
                    <input 
                        type="radio"
                        value="5"
                        checked={selectedOption === '5'}
                        onChange={handleOptionChange}
                    />
                    5
                </label>
            </div>    
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
