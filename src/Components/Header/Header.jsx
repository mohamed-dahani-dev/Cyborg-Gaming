import './Header.css'
import logo from '../../Assets/Images/logo.png'
import profileHeader from '../../Assets/Images/profile-header.jpg'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div className="header">
            <Link to={'/'} className="logo">
                <img src={logo} alt="" />
                <hr />
                <input type="text" placeholder="Type Somthing" />
            </Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/browse">Browse</Link>
                <Link to="/details">Details</Link>
                <Link to="/streams">Streams</Link>
                <Link className="profile" to="/profile">
                    <p>Profile</p>
                    <div className="imgProfile">
                        <img src={profileHeader} alt="" />
                    </div>
                </Link>
            </nav>
        </div>
    )
}
export default Header