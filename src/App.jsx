import BreakingNews from '../components/BreakingNews'
import Header from '../components/Header'
import NavMenu from '../components/NavMenu'
import FeaturedContainer from '../featuredContainer'
import News from '../News'


// import {articles} from './data/data'
// import { getImageUrl } from './utils/functions'

function App() {


  return (
    <>
    <Header title= "NEWS OF THE WORLD"/>
    <NavMenu />
    <FeaturedContainer />
    <News />
     {/* {articles.map((item, index) => <img key={index} src={getImageUrl(item.image)}></img>)} */}
    </>
  )
}

export default App
