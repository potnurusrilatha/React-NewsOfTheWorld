import SocialMedia from '../SocialMedia'
import styles from './header.module.css'
// import { SocialLogo } from 'social-logos';


const Header = ( ) => {
    return (
        <header className={styles.header}>
            <SocialMedia />    
            <h1 className={styles.pagetitle}>News Of The World</h1>
            <div className={styles.phone}>123-456-789</div>    

        </header>
    )           
}

export default Header