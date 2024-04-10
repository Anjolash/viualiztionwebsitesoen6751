import React, { useState, useEffect } from 'react';
import CircleGraph from './CircleGraph';
import PopupWithTextbox from './PopupWithTextbox';
import Bubble from '../../../Backend/assets/bubble.png'
import Gradient from '../../../Backend/assets/grad.png'

export default function Interactive() {
    const [selectedComponent, setSelectedComponent] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        setSelectedComponent(<h2 className='loading'>Loading......</h2>);
        runModel();
    }, []);
    const runModel = () =>{
        const selectedFeatures = {
            Glucose: document.getElementById('glucose').checked,
            Insulin: document.getElementById('insulin').checked,
            Age: document.getElementById('age').checked,
            BMI: document.getElementById('bmi').checked,
            BloodPressure: document.getElementById('bloodPressure').checked,
            SkinThickness: document.getElementById('skinThickness').checked,
            DiabetesPedigreeFunction: document.getElementById('diabetes').checked,
            Pregnancies: document.getElementById('pregnancies').checked,
        };

        // Filter out the unchecked features and get only their names
        const selectedFeatureNames = Object.entries(selectedFeatures)
            .filter(([key, value]) => value)
            .map(([key, value]) => key);

        // Send a POST request with the selected feature names
        fetch('http://127.0.0.1:5000/simulation', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ features: selectedFeatureNames }),
        })
        .then(() => {
            console.log("test")
            setSelectedComponent(<img className='placeholder' src={Bubble} alt="" />)
            document.getElementById('selection').value = 'Bubble Graph';
        })
        .catch((error) => console.error(error));
    }
    const handleUpdateGraph = (e) => {
        runModel();
    }
    // Handler to change the selected component based on dropdown value
    const handleDropdownChange = (e) => {
        const selectedValue = e.target.value;
        switch (selectedValue) {
            case 'Bubble Graph':
                setSelectedComponent(<img className='placeholder' src={Bubble} alt="" />);
                break;
            case 'Gradient Graph':
                setSelectedComponent(<img className='placeholder' src={Gradient} alt="" />);
                break;
            default:
                setSelectedComponent(<h2>Loading</h2>);
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
                    <button className='button update' onClick={handleUpdateGraph}>Update Graph</button>
                    <br />
                    <br />
                    <br />
                    <br />
                    <h3>Type of Visualization Graph</h3>
                    <br />
                    <select id='selection' onChange={handleDropdownChange}>
                        <option value="Bubble Graph">Bubble Graph</option>
                        <option value="Gradient Graph">Gradient Graph</option>
                    </select>
                </div>
            </div>
            <div className="next">
                <PopupWithTextbox/>
            </div>
        </div>
    );
}
