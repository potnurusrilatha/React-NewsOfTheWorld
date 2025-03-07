import styles from "./articleWithoutImage.module.css"

const ArticleWithoutImage = ({article}) => {
    return (
        <div >
            <h3>{article.headline}</h3>
            <p>{article.deck}</p>
        </div>
    )
}

export default ArticleWithoutImage