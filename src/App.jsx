// import BreakingNews from '../components/BreakingNews'
import FeaturedContainer from './components/FeatureContainer'
import Header from './components/Header'
import Navigation from './components/Navigation'
// import News from '../News'


// import {articles} from './data/data'
// import { getImageUrl } from './utils/functions'

function App() {


  return (
    <>
    <Header />
    <Navigation />
    <FeaturedContainer />


    
   
    {/* <News /> */}
     {/* {articles.map((item, index) => <img key={index} src={getImageUrl(item.image)}></img>)} */}
    </>
  )
}

export default App
