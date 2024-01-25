import './Profile.css'
import MostPopularClips from './Most Popular Clips/MostPopularClips'
import ProfileInfo from './Profile Info/ProfileInfo'
import GamingLibrary from '../../Components/Gaming Library/GamingLibrary'
const Profile = () => (
    <div className='profile-section'>
        <div className="your-profile">
            <ProfileInfo />
            <MostPopularClips />
        </div>
        <GamingLibrary />
    </div>
)
export default Profile