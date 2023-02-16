import SideBarItem from '../SideBarItem/SideBarItem'
import { DATA_SIDEBARMENU } from './Data'
import styles from './SideBarMenu.module.scss'
const SideBarMenu = ({ closedSideBar }) => {
	return (
		<div className={styles.sideBarMenu_list}>
			{DATA_SIDEBARMENU.map(menuItem => (
				<SideBarItem
					closedSideBar={closedSideBar}
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
