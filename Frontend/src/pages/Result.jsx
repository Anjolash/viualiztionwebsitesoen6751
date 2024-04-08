import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import green from '../assets/greenheart.png'
import red from '../assets/exclamationred.png'
import PopupWithTextbox from './PopupWithTextbox';

const Result = () => {
    const location = useLocation();
    const { data } = location.state;
    const { expert } = location.state;

    return (
      <div className="Landing">
        <div className="card-notbootstrap result">
            <img className='resultimage' src={data == 0 ? green : red} alt=''/>
            <br />
            <br />
            <h1>{data == 0 ? "The patient is not at risk of suffering diabetes" : "The patient is at risk of suffering diabetes"}</h1>
            <br />
            <h4 style={{ color: data == expert ? 'lightseagreen' : 'red' }}>
              Your analysis {data == expert ? 'matches' : 'does not match'} the model's prediction
            </h4>
        </div>
        <div className="next">
            <Link to="/2DVis">
                <button>Visualize Confidence Levels</button>
            </Link>
            <PopupWithTextbox/>
        </div>
      </div>
    );
  };
  
  export default Result;