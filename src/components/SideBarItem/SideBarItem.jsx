import { Link } from 'react-router-dom'
import styles from './SideBarItem.module.scss'
const SideBarItem = ({ title, img }) => {
  return (
    <Link to={title.toLowerCase()} className={styles.sideBarItem_wrapper}>
      <img className={styles.sideBarItem_icon} src={img} alt={title} />
      <p className={styles.sideBarItem_title}>{title}</p>
    </Link>
  )
}

export default SideBarItem
