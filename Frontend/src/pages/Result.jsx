import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import green from '../assets/Green.webp'
import red from '../assets/Red.jpg'

const Result = () => {
    const location = useLocation();
    const { data } = location.state;
  
    return (
      <div className="Landing">
        <div className="card-notbootstrap result">
            <img className='resultimage' src={data == 0 ? green : red} alt=''/>
            <br />
            <br />
            <h1>{data == 0 ? "The patient is not at risk of suffering diabetes" : "The patient is at high risk of suffering diabetes"}</h1>
        </div>
        <div className="next">
            <Link to="/NumMatrix">
                <button>Visualize Confidence Levels</button>
            </Link>
        </div>
      </div>
    );
  };
  
  export default Result;