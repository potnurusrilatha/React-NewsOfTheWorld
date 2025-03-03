import styles from './header.module.css'
import SocialMedia from '../SocialMedia'
import Contact from '../Contact'
const Header = ({title}) => {
    return (
        <header className={styles.header}>
                <SocialMedia /> 
            <h1 className={styles.pagetitle}>{title}</h1>  
            <Contact />
            
        </header>
    )           
}

export default Header