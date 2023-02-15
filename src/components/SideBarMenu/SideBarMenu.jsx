import SideBarItem from '../SideBarItem/SideBarItem'
import styles from './SideBarMenu.module.scss'
import { DATA_SIDEBARMENU } from './Data'
const SideBarMenu = () => {
  return (
    <div className={styles.sideBarMenu_list}>
      {DATA_SIDEBARMENU.map(menuItem => (
        <SideBarItem
          title={menuItem.title}
          img={menuItem.img}
          isActive={menuItem.isActive}
          key={menuItem.title}
        />
      ))}
    </div>
  )
}

export default SideBarMenu
