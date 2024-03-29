import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function InputDataForm() {

    const [formData, setFormData] = useState({
        glucose: '',
        bloodPressure: '',
        insulin: '',
        skinThickness: '',
        age: '',
        diabetesPedigreeFunction: '',
        bmi: '',
        pregnancies: ''
    })

    const navigateTo =  useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(formData)
        navigateTo('/NumMatrix');
    }

    const handleChange = ( event ) => {
        const{ name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }))
    }

    return (
        <div>
            <form id="contact__form" onSubmit={handleSubmit} method="POST" data-netlify="true">
                <div className="df df-col">
                    <div className="form__item me-3 col">
                        <label htmlFor="nam">Glucose</label>
                        <input type="number" min="0" className="input"  required name="glucose" value={formData.glucose} onChange={handleChange}></input>
                    </div>
                    <div className="form__item me-3 col">
                        <label htmlFor="nam">Blood Pressure</label>
                        <input type="number" min="0" className="input"  required name="bloodPressure" value={formData.bloodPressure} onChange={handleChange}></input>
                    </div>
                </div>
                <div className="df df-col">
                    <div className="form__item me-3 col">
                        <label htmlFor="nam">Insulin</label>
                        <input type="number" min="0" className="input"  required name="insulin" value={formData.insulin} onChange={handleChange}></input>
                    </div>
                    <div className="form__item me-3 col">
                        <label htmlFor="nam">Skin Thickness</label>
                        <input type="number" min="0" className="input" name="skinThickness" value={formData.skinThickness} onChange={handleChange}></input>
                    </div>
                </div>
                <div className="df df-col">
                    <div className="form__item me-3 col">
                        <label htmlFor="nam">Age</label>
                        <input type="number" min="0" className="input"  required name="age" value={formData.age} onChange={handleChange}></input>
                    </div>
                    <div className="form__item me-3 col">
                        <label htmlFor="nam">Diabetes Pedigree Function</label>
                        <input type="number" min="0" className="input" name="diabetesPedigreeFunction" value={formData.diabetesPedigreeFunction} onChange={handleChange}></input>
                    </div>
                </div>
                <div className="df df-col">
                    <div className="form__item me-3 col">
                        <label htmlFor="nam">BMI</label>
                        <input type="number" min="0" className="input"  required name="bmi" value={formData.bmi} onChange={handleChange}></input>
                    </div>
                    <div className="form__item me-3 col">
                        <label htmlFor="nam">Pregnancies</label>
                        <input type="number" min="0" className="input" name="pregnancies" value={formData.pregnancies} onChange={handleChange}></input>
                    </div>
                </div>
                <div className="button-container">
                    <button type="submit" className="form-button">Send It My Way</button>
                </div>
                
            </form>
        </div>
    )
}
