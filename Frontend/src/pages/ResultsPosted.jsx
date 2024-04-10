import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import green from '../assets/green.png'
export default function ResultsPosted() {

    return (
        <div className='Landing'>
            <h1>Test Results have been posted and forwarded to the patient</h1>
            <img className='greentick' src={green} alt="" />
            <br />
            <br />
            <br />
            <Link to="/">
                <button className='button final'>Home</button>
            </Link>
        </div>
    )
}
