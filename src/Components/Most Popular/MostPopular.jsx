import Card from './Card'
import './MostPopular.css'
import MostPopularData from '../../Data/MostPopularData'


const MostPopular = () => {
        const cards = MostPopularData.map(card => {
            return <Card key={card.id} img={card.img} title={card.title} rate={card.rate} category={card.category} download={card.download} />
        })
    return (
        <div className='most-popular'>
            <div className='most-popular-title'>
                <h1>Most Popular</h1>
                <h2>Right Now</h2>
            </div>
            <div className="cards">
                {cards}
            </div>
            <a href="#discoverpopular">Discover Popular</a>
        </div>
    )
}
export default MostPopular