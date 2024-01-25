import './DetailsGame.css'
import { FaStar, FaDownload, FaServer, FaGamepad } from 'react-icons/fa'
import DetailsAnyGameImages_01 from '../../../Assets/Images/details-01.jpg'
import DetailsAnyGameImages_02 from '../../../Assets/Images/details-02.jpg'
import DetailsAnyGameImages_03 from '../../../Assets/Images/details-03.jpg'

const DetailsGame = () => {
    return (
        <div className='details-game'>
            <div className="details-any-game">
                <div className='details-any-game-left'>
                    <div>
                        <h4>Fortnite</h4>
                        <span><FaStar style={{ color: "yellow" }} /> 4.8</span>
                    </div>
                    <div>
                        <span className='details-any-game-left-gategory'>Sandbox</span>
                        <span><FaDownload style={{ color: "var(--pink)", marginRight: "5px" }} /> 2.3M</span>
                    </div>
                </div>
                <div className="details-any-game-right">
                    <div>
                        <span><FaStar style={{ color: "yellow" }} /></span>
                        <span>4.8</span>
                    </div>
                    <div>
                        <span><FaDownload style={{ color: "var(--pink)" }} /></span>
                        <span>2.3M</span>
                    </div>
                    <div>
                        <span><FaServer style={{ color: "var(--pink)" }} /></span>
                        <span>36GB</span>
                    </div>
                    <div>
                        <span><FaGamepad style={{ color: "var(--pink)" }} /></span>
                        <span>Action</span>
                    </div>
                </div>
            </div>
            <div className='details-any-game-images'>
                <img src={DetailsAnyGameImages_01} alt="" />
                <img src={DetailsAnyGameImages_02} alt="" />
                <img src={DetailsAnyGameImages_03} alt="" />
            </div>
            <div className="details-any-game-description">
                <span>Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout. You can make a <span style={{ color: "#fff" }}>small contribution via PayPal</span> to info [at] templatemo.com and thank you for supporting. If you want to get the PSD source files, please contact us. Lorem ipsum dolor sit consectetur es dispic dipiscingei elit, sed doers eiusmod lisum hored tempor.</span>
            </div>
            <div className="details-any-game-btn">
                <div>
                    <a href="/#">Download Fortnite Now!</a>
                </div>
            </div>
        </div>
    )
}

export default DetailsGame