import './GamingLibraryCard.css'
const GamingLibraryCard = (props) => {
    return(
        <div className='gaming-library-card'>
            <img src={props.img} alt="" />
            <div>
                <h4>{props.title}</h4>
                <span>{props.category}</span>
            </div>
            <div>
                <h4>Date Added</h4>
                <span>{props.date_added}</span>
            </div>
            <div>
                <h4>Hours Played</h4>
                <span>{props.hours_played}</span>
            </div>
            <div>
                <h4>Currently</h4>
                <span>{props.currently}</span>
            </div>
            <button>Downloaded</button>
        </div>
    )
}
export default GamingLibraryCard