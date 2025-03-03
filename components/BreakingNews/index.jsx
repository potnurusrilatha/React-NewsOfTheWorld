import styles from './breakingNews.module.css'

const BreakingNews = () => {
    return(
        <div className={styles.breakingNews}>
            <div className="breakingNews-span">
            <p>
            <span className={styles.breakingText}>Breaking News:</span>
            International maigrantsday:280 people leave their home to better life. 
            <span className={styles.separator}>  - </span>
            FIFA World Cup 2022: A night to remember.
            <span className={styles.separator}> - </span>
            Johnny Depp reprises Jack Sparrow.
            </p>
        </div>
        </div>
        
    )
 }

 export default BreakingNews