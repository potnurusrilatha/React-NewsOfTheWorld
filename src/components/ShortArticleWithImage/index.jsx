import { getImageUrl } from '../../utils/functions'
import styles from "./shortArticleWithImage.module.css"

const ShortArticleWithImage = ({article}) => {
    return (
        <div className={styles.article}>
            <img src={getImageUrl(article.image)} />
            <h3>{article.headline}</h3>
            <p>{article.deck}</p>
        </div>
    )
}

export default ShortArticleWithImage