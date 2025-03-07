import styles from './featuredContainer.module.css'
import MainArticle from '../MainArticle'
import ShortArticleWithImage from '../ShortArticleWithImage';
import ArticleWithoutImage from '../ArticleWithoutImage';

import { featuredArticle, sportsArticles, recentArticles } from '../../data/data';


const FeaturedContainer = () => {
    return (
        <div className={styles.featuredContainer}>
            <div className={styles.leftContainer}>
                <h3>Recent Stories</h3>
                {recentArticles.map((item, index) => <ArticleWithoutImage key={index} article={item} />)}
            </div>
            <MainArticle article={featuredArticle} />
            <div className={styles.rightContainer}>
                {sportsArticles.map((item, index) => <ShortArticleWithImage key={index} article={item} />)}
            </div>
        </div>
    )
}

export default FeaturedContainer