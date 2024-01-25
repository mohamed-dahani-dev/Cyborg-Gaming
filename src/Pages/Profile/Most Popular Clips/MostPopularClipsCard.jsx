import './MostPopularClipsCard.css'
import { FaPlay, FaEye } from 'react-icons/fa'

const MostPopularClipsCard = (props) => {
    return (
        <div className='most-popular-clips-card'>
            <div className="img">
                <img src={props.img} alt="" />
                <a href="/#"><FaPlay style={{color: "var(--pink)"}} /></a>
            </div>
            <div className="most-popular-clip-card-content">
                <h4>{props.clip_title}</h4>
                <span><FaEye style={{color: "var(--pink)"}} /> {props.views}</span>
            </div>
        </div>
    )
}

export default MostPopularClipsCard