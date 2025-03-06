
import {articles} from "../../data/data"
import styles from './ShortArticleWithImage.module.css'

const article = articles[6];

const ShortArticleWithImage = () = {
    return (
            <div className={styles.article}>
            <img src={getImageUrl(article.image)} />
            <h3>{article.headline}</h3>
            </div>
    )
}

export default ShortArticleWithImage