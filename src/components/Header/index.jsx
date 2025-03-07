import styles from './header.module.css'
import SocialMedia from '../SocialMedia'

const Header = () => {
    return (
        <header className={styles.header}>
            <SocialMedia />
            <h1 className={styles.pageTitle}>News of the World</h1>
            <div className={styles.phone}>123-456-789</div>
        </header>
    )

}
 export default Header