import styles from '.featuredContainer.module.css'
import ShortArticleWithImage from '../ShortArticleWithImage'
import {featuredArticle} from '../../data/data';

const FeaturedContainer  = () => {
    return (
        <div className={styles.featuredContainer}>
            <div className={styles.leftcontainer}>
            <MainArticle article={featuredArticle} />
            <div className={styles.rightcontainer}>
                <ShortArticleWithImage />
                <ShortArticleWithImage />

            </div>
        </div>
        </div>
    )
}
export default FeaturedContainer