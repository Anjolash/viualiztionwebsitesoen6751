import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import green from '../assets/greenheart.png'
import red from '../assets/exclamationred.png'

const Result = () => {
    const location = useLocation();
    const { data } = location.state;
  
    return (
      <div className="Landing">
        <div className="card-notbootstrap result">
            <img className='resultimage' src={data == 0 ? green : red} alt=''/>
            <br />
            <br />
            <h1>{data == 0 ? "The patient is not at risk of suffering diabetes" : "The patient is at risk of suffering diabetes"}</h1>
        </div>
        <div className="next">
            <Link to="/2DVis">
                <button>Visualize Confidence Levels</button>
            </Link>
        </div>
      </div>
    );
  };
  
  export default Result;