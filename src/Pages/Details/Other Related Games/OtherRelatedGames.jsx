import './OtherRelatedGames.css'
import OtherRelatedGamesCards from './OtherRelatedGamesCards'
import OtherRelatedGamesData from '../../../Data/OtherRelatedGamesData'

const OtherRelatedGames = () => {
    const cards = OtherRelatedGamesData.map(card => {
        return <OtherRelatedGamesCards key={card.id} img={card.img} title={card.title} rate={card.rate} category={card.category} downloads={card.downloads} />
    })
    return (
        <div className='other-related-games'>
            <div className='most-popular-clips-title other-related-games-title' >
                <h1>Other Related</h1>
                <h2>Games</h2>
            </div>
            <div className="other-related-games-cards">
                {cards}
            </div>
        </div>
    )
}

export default OtherRelatedGames