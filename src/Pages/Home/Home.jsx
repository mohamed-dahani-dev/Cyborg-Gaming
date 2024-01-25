import './Home.css'
import Hero from '../../Components/Hero/Hero'
import MostPopular from '../../Components/Most Popular/MostPopular'
import GamingLibrary from '../../Components/Gaming Library/GamingLibrary'
const Home = () => {
    return (
        <>
            <Hero />
            <MostPopular />
            <GamingLibrary />
        </>
    )
}
export default Home