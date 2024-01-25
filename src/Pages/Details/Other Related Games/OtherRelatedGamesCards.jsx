import './OtherRelatedGamesCards.css'
import { FaStar, FaDownload } from 'react-icons/fa'

const OtherRelatedGamesCards = (props) => {
    return (
        <div className='other-related-games-card'>
            <div className="other-related-games-cards-left">
                <img src={props.img} alt="" />
                <div>
                    <h4>{props.title}</h4>
                    <span style={{color: "var(--text)"}}>{props.category}</span>
                </div>
            </div>
            <div className="other-related-games-cards-right">
                <div style={{marginBottom: "10px"}}>
                    <span style={{marginRight: "6px"}}><FaStar style={{color: "yellow"}} /></span>
                    <span>{props.rate}</span>
                </div>
                <div>
                    <span style={{marginRight: "8px"}}><FaDownload style={{color: "var(--pink)"}} /></span>
                    <span>{props.downloads}</span>
                </div>
            </div>
        </div>
    )
}

export default OtherRelatedGamesCards