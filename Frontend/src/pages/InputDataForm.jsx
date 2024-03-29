import React from 'react'

export default function InputDataForm() {
    return (
        <div>
            <form id="contact__form" method="POST" data-netlify="true">
                <div className="df df-col">
                    <div className="form__item me-3 col">
                        <label htmlFor="nam">Glucose</label>
                        <input type="number" className="input"  required name="user_name"></input>
                    </div>
                    <div className="form__item me-3 col">
                        <label htmlFor="nam">Blood Pressure</label>
                        <input type="number" className="input"  required name="user_name"></input>
                    </div>
                </div>
                <div className="df df-col">
                    <div className="form__item me-3 col">
                        <label htmlFor="nam">Insulin</label>
                        <input type="number" className="input"  required name="user_name" ></input>
                    </div>
                    <div className="form__item me-3 col">
                        <label htmlFor="nam">Skin Thickness</label>
                        <input type="number" className="input" name="user_name"></input>
                    </div>
                </div>
                <div className="df df-col">
                    <div className="form__item me-3 col">
                        <label htmlFor="nam">Age</label>
                        <input type="number" className="input"  required name="user_name" ></input>
                    </div>
                    <div className="form__item me-3 col">
                        <label htmlFor="nam">Diabetes Pedigree Function</label>
                        <input type="number" className="input" name="user_name"></input>
                    </div>
                </div>
                <div className="df df-col">
                    <div className="form__item me-3 col">
                        <label htmlFor="nam">BMI</label>
                        <input type="number" className="input"  required name="user_name" ></input>
                    </div>
                    <div className="form__item me-3 col">
                        <label htmlFor="nam">Pregnancies</label>
                        <input type="number" className="input" name="user_name"></input>
                    </div>
                </div>
                <button type="submit" className="form-button">Send It My Way</button>
            </form>
        </div>
    )
}
