import ShortArticleWithImage from "../ShortArticleWithImage"
import styles from './category.module.css'

const Category = ({title, categoryArray}) => {
    return (
        <div className={styles.category}>
            <h2 className={styles.categoryTitle}>{title}</h2>
            {categoryArray.filter((item, index) => index < 3).map((item, index) => <div key={index} className={styles.article}><ShortArticleWithImage article={item} /></div>)}
        </div>
    )
}

export default Category