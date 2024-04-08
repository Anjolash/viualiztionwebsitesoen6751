import { Link } from 'react-router-dom'
import placeholder from '../assets/placeholdernummatrix.png'
import PopupWithTextbox from './PopupWithTextbox'

export default function ThreeDVisualization() {
    return (
        <div>
            <div className="Landing">
                <div className="charts">
                    <figure className='mt-4'>
                        <img className='placeholder' src={placeholder} alt="" />
                    </figure>
                </div>   
                <div className="mt-4 next">
                    <Link to = "/Interactive">
                        <button >
                            Interactive Visualization
                        </button>
                    </Link>
                    <PopupWithTextbox/>
                </div>                    
            </div>
        </div>
    )
}
