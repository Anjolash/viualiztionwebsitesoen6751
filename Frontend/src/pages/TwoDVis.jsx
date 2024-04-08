
import { Link } from 'react-router-dom'
import placeholder from '../assets/placeholdernummatrix.png'


export default function TwoDVis() {
    return (
        <div>
            <div className="Landing">
                <div className="charts">
                    <figure className='mt-4'>
                        <img className='placeholder' src={placeholder} alt="" />
                    </figure>
                </div>   
                <div className="mt-4">
                    <Link to = "/2DViswithdescription">
                        <button >
                            2D Visualization with description
                        </button>
                    </Link>
                </div>
                <div className="mt-4 decision">
                    <input placeholder="Doctor's decision"  type="textbox" />
                    
                </div>
                <div className="mt-4 decision">
                    <button >
                                Submit
                    </button>
                </div>
                    
            </div>
        </div>
    )
}
