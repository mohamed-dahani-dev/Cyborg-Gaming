import './Browse.css'
import BrowseSwipe from './Browse Swipe/BrowseSwipe'

const Browse = () => {
  return (
    <div>
      <div className='most-popular'>
            <div className='most-popular-title featured-games-title'>
                <h1>Featured</h1>
                <h2>Games</h2>
                
            </div>
            <BrowseSwipe/>
        </div>
        
    </div>
  )
}

export default Browse