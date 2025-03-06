import styles from './mainArticle.module.css'
import { getImageUrl } from '../../utils/functions';


const MainArticle = ({article}) => {
    return (
        <div className= {styles.mainArticle}>
            <img src={getImageUrl(article.image)} />
            <h2>{article.headline}</h2>
            <p>{article.deck}</p>
            <p className={styles.category}><span>Category:</span> {article.category}</p>
        </div>

    )
}

export default MainArticle;