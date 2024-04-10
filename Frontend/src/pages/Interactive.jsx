import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PieChart from './PieChart';
import BarGraph from './BarGraph';
import CircleGraph from './CircleGraph';
import PopupWithTextbox from './PopupWithTextbox';

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
                    <br />
                    <br />
                    <br />
                    <h3>Please select the features:</h3>
                    <div className="checkbox-row">
                        <div>
                            <input type="checkbox" id="glucose" defaultChecked/>
                            <label htmlFor="glucose">Glucose</label>
                        </div>
                        <div>
                            <input type="checkbox" id="insulin" defaultChecked/>
                            <label htmlFor="insulin">Insulin</label>
                        </div>
                    </div>
                    <div className="checkbox-row">
                        <div>
                            <input type="checkbox" id="age" defaultChecked/>
                            <label htmlFor="age">Age</label>
                        </div>
                        <div>
                            <input type="checkbox" id="bmi" defaultChecked/>
                            <label htmlFor="bmi">BMI</label>
                        </div>
                    </div>
                    <div className="checkbox-row">
                        <div>
                            <input type="checkbox" id="bloodPressure" defaultChecked/>
                            <label htmlFor="bloodPressure">Blood Pressure</label>
                        </div>
                        <div>
                            <input type="checkbox" id="skinThickness" defaultChecked/>
                            <label htmlFor="skinThickness">Skin Thickness</label>
                        </div>
                    </div>
                    <div className="checkbox-row">    
                        <div>
                            <input type="checkbox" id="diabetes" defaultChecked/>
                            <label htmlFor="diabetes">Diabetes Pedigree</label>
                        </div>
                        <div>
                            <input type="checkbox" id="pregnancies" defaultChecked/>
                            <label htmlFor="pregnancies">Number of Pregnancies</label>
                        </div>
                    </div>
                    <button className='button update'>Update Graph</button>
                    <br />
                    <br />
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
                <PopupWithTextbox/>
            </div>
        </div>
    );
}
