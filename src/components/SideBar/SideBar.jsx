import { useSelector } from 'react-redux'
import Search from '../Search/Search'
import SideBarMenu from '../SideBarMenu/SideBarMenu'
import UserPanel from '../UserPanel/UserPanel'
import styles from './SideBar.module.scss'
const SideBar = () => {
  const currentStatus = useSelector(state => state.toggleBurger.status)
  return (
    <div
      className={`${styles.sideBar_wrapper} ${
        currentStatus && styles.sideBar_wrapper_active
      }`}
    >
      <div>
        <Search />
        <SideBarMenu />
      </div>
      <UserPanel />
    </div>
  )
}

export default SideBar
