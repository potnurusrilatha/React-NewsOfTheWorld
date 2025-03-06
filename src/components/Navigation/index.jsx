import  { articles } from '../../data/data.js'
import NavItem from '../NavigationItem/index.jsx';
import styles from './navigation.module.css'

const Navigation = () => {

    const uniqueCategories = [...new Set(articles.map(item =>item.category))];
    const today = new Date().toLocaleDateString('en-gb', {weekday:"long" ,year:"numeric",month:"short",day:"numeric"});
        return (
        <div className={styles.nav}>
                {uniqueCategories.map((category, index) => <NavItem  key= {index} title={category} />)}
                <div className= {styles.date}>{today}</div>
        </div>    
        )
}

export default Navigation;




