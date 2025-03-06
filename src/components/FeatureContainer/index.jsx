import styles from './featuredContainer.module.css'
import MainArticle from '../MainArticle';

import {featuredArticle} from '../../data/data';


const FeaturedContainer = () => {
    return (
        <div className= {styles.featuredContainer}>
            <MainArticle article={featuredArticle}/>
        </div>

    )
}

export default FeaturedContainer;