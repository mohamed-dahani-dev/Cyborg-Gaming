import './MostPopularClips.css'
import MostPopularClipsCard from './MostPopularClipsCard'
import MostPopularClipsData from '../../../Data/MostPopularClipsData'

const MostPopularClips = () => {
    const cards = MostPopularClipsData.map(card => {
        return <MostPopularClipsCard key={card.id} img={card.img} clip_title={card.clip_title} views={card.views} />
    })
    return (
        <div className='most-popular-clips'>
            <hr />
            <div className='most-popular-clips-title'>
                <h1>Your Most Popular</h1>
                <h2>Clips</h2>
            </div>
            <div className="most-popular-clips-cards">
                {cards}
            </div>
        </div>
    )
}

export default MostPopularClips