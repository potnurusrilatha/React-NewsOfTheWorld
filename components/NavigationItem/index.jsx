
const NavItem=({title,link="#"}) => {
    return(
        <a className={StyleSheet.navItem} href={link}>{title}</a>
    )
}
export default NavgationItem