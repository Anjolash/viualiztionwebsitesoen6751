import React, { useState, useEffect } from 'react';
import logo from '../assets/concordia-logo.webp';
import Landing from './Landing';

export default function Welcome() {
    const [current, setCurrent] = useState(0);
    return current === 0 ? (
        <div className='Landing Welcome'>
            <img src={logo} alt="Concordia" />
            <br/>
            <h1>Uncertainty Visualization for Decision Makers</h1>
            <br/>
            <h2>Team P</h2>
            <br/>
            <h3>Survey for Different Uncertainity Visualization Techniques</h3>
            <br/>
            <br/>
            <button onClick={() => setCurrent(1)}>Start Survey</button>
        </div>
    ) :
    <Landing  totalVisualizations={3}/>
}