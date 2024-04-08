
import { Link } from 'react-router-dom'
import placeholder from '../assets/placeholdernummatrix.png'


export default function TwoDVisWithDescription() {
    return (
        <div>
            <div className="Landing">
                <div className="charts">
                    <figure className='mt-4'>
                        <img className='placeholder' src={placeholder} alt="" />
                    </figure>
                    <div className="p">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aliquam, velit natus impedit, accusamus enim fugit soluta nam veniam in expedita excepturi illum cupiditate. Dolores obcaecati consequatur tempora soluta saepe?
                    </div>
                </div>   
                <div className="mt-4">
                    <Link to = "/3DVis">
                        <button >
                            3D Visualization
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
