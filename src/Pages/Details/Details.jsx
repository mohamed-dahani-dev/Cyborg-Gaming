import './Details.css'
import DetailsImgLeft from '../../Assets/Images/feature-left.jpg'
import DetailsImgRight from '../../Assets/Images/feature-right.jpg'
import { FaPlay } from 'react-icons/fa'
import DetailsGame from './Details Game/DetailsGame'
import OtherRelatedGames from './Other Related Games/OtherRelatedGames'

const Details = () => {
    return (
        <div className='details'>
            <div className="details-img">
                <div className="details-img-left">
                    <img src={DetailsImgLeft} alt="" />
                </div>
                <div className="details-img-right">
                    <img src={DetailsImgRight} alt="" />
                    <a href="/#"><FaPlay style={{color: "var(--pink)"}} /></a>
                </div>
            </div>
            <h1 className='details-game-name'>FORTNITE DETAILS</h1>
            <DetailsGame />
            <OtherRelatedGames />
        </div>
    )
}

export default Details