import styles from './navItem.module.css'
const NavItem =({title, link="#"}) => {
    return (
        <a  className={styles.navItem} href={link}>{title}</a>
    )
}

export default NavItem