
import { Link } from 'react-router-dom'
import placeholder from '../assets/placeholdernummatrixinfo.png'
import PopupWithTextbox from './PopupWithTextbox'


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
                <div className="mt-4 next">
                    <Link to = "/3DVis">
                        <button >
                            3D Visualization
                        </button>
                    </Link>
                    <PopupWithTextbox/>
                </div>                   
            </div>
        </div>
    )
}
