import React from 'react'
import {Link} from 'react-router-dom'
import placeholder from '../assets/placeholdernummatrix.png'

export default function Numericalmatrix() {
    return (
        <div>
            <div className="Landing">
                <div className="charts">
                    <figure className='mt-4'>
                        <img className='placeholder' src = {placeholder} alt="" />
                    </figure>
                    <div className="details">
                        Details about features
                    </div>
                </div>
                
                
                
                <div className="next">
                    
                        <Link to = "/2DVis">
                            <button >
                                Show simpler visualization
                            </button>
                        </Link>
                        <button> 3D </button>
                        <Link to = "/Interactive">
                            <button >
                                Interactive Visualisation
                            </button>
                        </Link>
                </div>
        </div>
        </div>
    )
}
