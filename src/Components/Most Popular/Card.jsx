import './Card.css'
import {FaStar, FaDownload} from 'react-icons/fa'
const Card = (props) => {
    return(
        <div>
            <div className="card">
                <img src={props.img} alt="#" />
                <div className="card-content">
                    <div className="title-star">
                        <h3>{props.title}</h3>
                        <h4><FaStar style={{color: 'yellow'}} /> {props.rate}</h4>
                    </div>
                    <div className="category-download">
                        <span>{props.category}</span>
                        <h4><FaDownload style={{color: "var(--pink)"}} /> {props.download}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card