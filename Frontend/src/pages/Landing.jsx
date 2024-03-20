import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import BarGraph from './BarGraph';
import PieChart from './PieChart';
import CircleGraph from './CircleGraph';

export default function Landing({ totalVisualizations = 2 }) {
    const [current, setCurrent] = useState(0);
    const [data, setData] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedOption2, setSelectedOption2] = useState(null);
    const [confusingResponse, setConfusingResponse] = useState('');
    const [modelUncertaintyResponse, setModelUncertaintyResponse] = useState('');
    const [responses, setResponses] = useState([]);
    const [tempConfusingResponse, setTempConfusingResponse] = useState('');
    const [tempModelUncertaintyResponse, setTempModelUncertaintyResponse] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        const selectedResponse = event.target.value;
        const responseIndex = current;

        setResponses((prevResponses) => {
            const updatedResponses = [...prevResponses];
            updatedResponses[responseIndex] = selectedResponse;
            return updatedResponses;
        });
    };

    const handleOptionChange2 = (event) => {
        setSelectedOption2(event.target.value);
        const selectedResponse = event.target.value;
        const responseIndex = current;

        setResponses((prevResponses) => {
            const updatedResponses = [...prevResponses];
            updatedResponses[responseIndex] = selectedResponse;
            return updatedResponses;
        });
    };

    const handleConfusingResponseChange = (event) => {
        setTempConfusingResponse(event.target.value);
    };

    const handleModelUncertaintyResponseChange = (event) => {
        setTempModelUncertaintyResponse(event.target.value);
    };

    const handleNext = () => {
        setCurrent((prev) => prev + 1);
        setConfusingResponse(tempConfusingResponse);
        setModelUncertaintyResponse(tempModelUncertaintyResponse);
        setTempConfusingResponse('');
        setTempModelUncertaintyResponse('');
        setSelectedOption(null);
        setSelectedOption2(null);
    };

    const handleBack = () => {
        setCurrent((prev) => prev - 1);
        setConfusingResponse('');
        setModelUncertaintyResponse('');
        setTempConfusingResponse('');
        setTempModelUncertaintyResponse('');
        setSelectedOption(null);
        setSelectedOption2(null);
    };

    const exportToCSV = () => {
        const headers = ['Visualization', 'Response', 'Confusing Response', 'Model Uncertainty Response'];
        const headerRow = headers.join(',');

        const dataRows = responses.map((response, index) => {
            return `"Visualization ${index + 1}", ${response || ''}, ${confusingResponse || ''}, ${modelUncertaintyResponse || ''}`;
        });

        const csvContent = [headerRow, ...dataRows].join('\n');

        console.log(csvContent);
    };

    const handleSubmit = () => {
        exportToCSV();
    };

    useEffect(() => {
        fetch('http://127.0.0.1:5000/runtrain')
            .then((response) => response.json())
            .then((json) => {
                setData(json);
                console.log(json);
                setResponses(new Array(totalVisualizations).fill(undefined));
            })
            .catch((error) => console.error(error));
    }, []);

    return data ? (
        <div className="Landing">
            { 
                {
                    0: <PieChart data={data} />,
                    1: <BarGraph data={data} />,
                    2: <CircleGraph data={data} />
                }[current]
            } 
            <p className='mt-4'>Did the visualization appear confusing to you? </p>
            <div className="textbox">
                <input type="textbox" onChange={handleConfusingResponseChange} value={tempConfusingResponse} />
            </div>
            <p className="mt-4">Does the image improve peoples understanding of uncertainty, helping them to make better decisions? </p>
            <div className="options">
                {[0, 1, 2, 3, 4, 5].map((value) => (
                    <label key={value}>
                        <input 
                            type="radio"
                            value={value}
                            checked={selectedOption === value.toString()}
                            onChange={handleOptionChange} />
                        {value}
                    </label>
                ))}
            </div>
            <p className="mt-4">Does the image effectively communicate the uncertainty in the model to you? </p>
            <div className="options">
                {[0, 1, 2, 3, 4, 5].map((value) => (
                    <label key={value}>
                        <input
                            type="radio"
                            value={value}
                            checked={selectedOption2 === value.toString()}
                            onChange={handleOptionChange2}
                        />
                        {value}
                    </label>
                ))}
            </div>
            <div className="controls">
                <button onClick={handleBack} disabled={current === 0}>
                    Back
                </button>
                {current === totalVisualizations - 1 ? (
                    <button className='button submit' onClick={handleSubmit} >
                        Submit
                    </button>
                ) : (
                    <button onClick={handleNext}>Next</button>
                )}
            </div>
        </div>
    ) : (
        <h1>LOADING.....</h1>
    );
}

Landing.propTypes = {
    totalVisualizations: PropTypes.number.isRequired,
};
