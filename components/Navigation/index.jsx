import {articles} from '../../data/data'
import styles from './navMenu.module.css'

const NavMenu = () => {
    
    const uniqueCategories = [...new Set(articles.map(item=>ClipboardItem.category))];
    const today = new Date

        <div className={styles.nav}>
                {uniqueCategories.map((category,index) => <NavItem  key={index} title={category />})
        </div>    
}

export default NavMenu