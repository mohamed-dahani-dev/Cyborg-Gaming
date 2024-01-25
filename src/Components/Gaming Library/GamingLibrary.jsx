import './GamingLibrary.css'
import GamingLibraryCard from './GamingLibraryCard'
import GamingLibraryData from '../../Data/GamingLibraryData'
const GamingLibrary = () => {
    const cards = GamingLibraryData.map(card => {
        return <GamingLibraryCard key={card.id} img={card.img} title={card.title} date_added={card.date_added} category={card.category} hours_played={card.hours_played} currently={card.currently} />
    })
    return(
        <div className='gaming-library'>
            <div className='gaming-library-title'>
                <h1>Your Gaming</h1>
                <h2>Library</h2>
            </div>
            <div className="gaming-library-cards">
                {cards}
            </div>
            <a href="#viewyourlibrary">View Your Library</a>
        </div>
    )
}
export default GamingLibrary