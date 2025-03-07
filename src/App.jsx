import './App.css'
import Category from './components/Category'
import FeaturedContainer from './components/FeaturedContainer'

import Header from './components/Header'
import Navigation from './components/Navigation'
import { sportsCategory, swedenCategory, worldCategory, crimeCategory, entertainmentCategory } from './data/data'

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <FeaturedContainer />
      <Category title="Sports" categoryArray={sportsCategory} />
      <Category title="Sweden" categoryArray={swedenCategory} />
      <Category title="World" categoryArray={worldCategory} />
      <Category title="Crime" categoryArray={crimeCategory} />
      <Category title="Entertainment" categoryArray={entertainmentCategory} />
    </>
  )
}

export default App
