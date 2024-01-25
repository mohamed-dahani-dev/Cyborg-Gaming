import './ProfileInfo.css'
import ProfileInfoImg from '../../../Assets/Images/profile.jpg'
import MostPopularClipsDataLength from '../../../Data Length/MostPopularClipsDataLength'
import GamingLibraryDataLength from '../../../Data Length/GamingLibraryDataLength'

const ProfileInfo = () => {
    return (
        <div className='profile-info'>
            <div className="profile-info-left">
                <img src={ProfileInfoImg} alt="" />
                <div className="profile-info-content">
                    <div className="condition">Offline</div>
                    <h1>Alan Smithee</h1>
                    <p>You Haven't Gone Live yet. Go Live By Touching The Button Below.</p>
                    <a href="/#">Start Live Stream</a>
                </div>
            </div>
            <div className="profile-info-right">
                <div className='profile-info-right-table'>
                    <span className='profile-info-right-table-name'>Games Downloaded</span>
                    <span className='profile-info-right-table-info-name'>{GamingLibraryDataLength}</span>
                </div>
                <hr />
                <div className='profile-info-right-table'>
                    <span className='profile-info-right-table-name'>Friends Online</span>
                    <span className='profile-info-right-table-info-name'>16</span>
                </div>
                <hr />
                <div className='profile-info-right-table'>
                    <span className='profile-info-right-table-name'>Live Streams</span>
                    <span className='profile-info-right-table-info-name'>None</span>
                </div>
                <hr />
                <div className='profile-info-right-table'>
                    <span className='profile-info-right-table-name'>Clips</span>
                    <span className='profile-info-right-table-info-name'>{MostPopularClipsDataLength}</span>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo