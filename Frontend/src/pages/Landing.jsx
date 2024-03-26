import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
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
        setSelectedOption('');
        setSelectedOption2('');
    };

    const exportToCSV = () => {
        const headers = ['Visualization', 'Response', 'Confusing Response', 'Model Uncertainty Response'];
        const headerRow = headers.join(',');
        
        const dataRows = responses.map((response, index) => {
        return `"Visualization ${index + 1}", ${response || ''}, ${index === current ? tempConfusingResponse || '' : ''}, ${index === current ? selectedOption || '' : ''}, ${index === current ? selectedOption2 || '' : ''}`;
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
            <div className="charts">
                <PieChart data={data} />
                <CircleGraph data={data} />
                <BarGraph data={data} />
                
            </div>
            <div className="textbox">
                <input type="textbox" onChange={handleConfusingResponseChange} value={tempConfusingResponse} />
            </div>
            <div className="controls mt-4">
                <Link to="/NumMatrix">
                <button>
                    Back
                </button>
                </Link>
                <Link to="">
                <   button>Next</button>
                </Link>  
            </div>
        </div>
    ) : (
        <h1>LOADING.....</h1>
    );
}

Landing.propTypes = {
    totalVisualizations: PropTypes.number.isRequired,
};
