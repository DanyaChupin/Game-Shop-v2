import { useDispatch } from 'react-redux'
import { toggleBurgerMenu } from '../../store/toggleBurgerMenu'

import styles from './BurgerMenu.module.scss'

const BurgerMenu = () => {
  const dispatch = useDispatch()

  const toggleMenu = () => {
    dispatch(toggleBurgerMenu())
  }
  return (
    <span onClick={toggleMenu}>
      <img
        className={styles.burger_menu}
        src="/assets/icons/burger-icon.png"
        alt="burger"
      />
    </span>
  )
}

export default BurgerMenu
