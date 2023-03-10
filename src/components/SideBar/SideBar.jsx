import { useDispatch, useSelector } from 'react-redux'
import { toggleBurgerMenu } from '../../store/toggleBurgerMenu/index.js'
import Search from '../Search/Search'
import SideBarMenu from '../SideBarMenu/SideBarMenu'
import UserPanel from '../UserPanel/UserPanel'
import styles from './SideBar.module.scss'
const SideBar = () => {
	const currentStatus = useSelector(state => state.toggleBurger.status)
	const dispatch = useDispatch()
	const closedSideBar = () => {
		dispatch(toggleBurgerMenu())
	}
	return (
		<div
			className={`${styles.sideBar_wrapper} ${
				currentStatus && styles.sideBar_wrapper_active
			}`}
		>
			<div>
				<Search />
				<SideBarMenu closedSideBar={closedSideBar} />
			</div>
			<UserPanel closedSideBar={closedSideBar} />
		</div>
	)
}

export default SideBar
