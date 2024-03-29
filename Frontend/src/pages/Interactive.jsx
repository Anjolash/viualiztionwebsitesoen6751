import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PieChart from './PieChart';
import BarGraph from './BarGraph';
import CircleGraph from './CircleGraph';

export default function Interactive() {
    const [selectedComponent, setSelectedComponent] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/runtrain')
            .then((response) => response.json())
            .then((json) => {
                setData(json);
                console.log(json);
                if (json) {
                    setSelectedComponent(<PieChart data={json} />);
                }
            })
            .catch((error) => console.error(error));
    }, []);
    // Handler to change the selected component based on dropdown value
    const handleDropdownChange = (e) => {
        const selectedValue = e.target.value;
        switch (selectedValue) {
            case 'Pie Chart':
                setSelectedComponent(<PieChart data={data} />);
                break;
            case 'Bar Graph':
                setSelectedComponent(<BarGraph data={data} />);
                break;
            case 'Circle Graph':
                setSelectedComponent(<CircleGraph data={data} />);
                break;
            default:
                setSelectedComponent(<PieChart data={data} />);
                break;
        }
    };

    return (
        <div className='Landing'>
            <h1>Visualizing Interactively</h1>
            <div className="card-notbootstrap">
                <div className="card-left">
                    {selectedComponent}
                </div>
                <div className="card-right">
                    <h3>Please select the features:</h3>
                    <br />
                    <div>
                        <input type="checkbox" id="checkbox1" />
                        <label htmlFor="checkbox1">Feature 1</label>
                    </div>
                    <div>
                        <input type="checkbox" id="checkbox2" />
                        <label htmlFor="checkbox2">Feature 2</label>
                    </div>
                    <div>
                        <input type="checkbox" id="checkbox3" />
                        <label htmlFor="checkbox3">Feature 3</label>
                    </div>
                    <div>
                        <input type="checkbox" id="checkbox4" />
                        <label htmlFor="checkbox4">Feature 4</label>
                    </div>
                    <div>
                        <input type="checkbox" id="checkbox5" />
                        <label htmlFor="checkbox5">Feature 5</label>
                    </div>
                    <br />
                    <br />
                    <h3>Type of Visualization Graph</h3>
                    <br />
                    <select onChange={handleDropdownChange}>
                        <option value="Pie Chart">Pie Chart</option>
                        <option value="Bar Graph">Bar Graph</option>
                        <option value="Circle Graph">Circle Graph</option>
                    </select>
                </div>
            </div>
            <div className="next">
                <button>Show result</button>
            </div>
        </div>
    );
}
