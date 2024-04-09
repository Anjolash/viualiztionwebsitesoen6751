import { Link } from 'react-router-dom'
import placeholder from '../assets/placeholdernummatrix.png'
import PopupWithTextbox from './PopupWithTextbox'

export default function ThreeDVisualization() {
    return (
        <div>
            <div className="Landing">
                <div className="charts">
                    <figure className='mt-4'>
                        <iframe src="/3d.html" title="3D Visualization" className='html3d'></iframe>
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
 