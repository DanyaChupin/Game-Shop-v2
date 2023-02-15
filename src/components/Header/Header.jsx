import BurgerMenu from '../BurgerMenu/BurgerMenu'
import styles from './Header.module.scss'
const Header = () => {
  return (
    <div className={styles.header_wrapper}>
      <div className={styles.header}>
        <div className={styles.header_left}>
          <img
            className={styles.header_logo}
            src="/assets/icons/eSTRIX-logo.png"
            alt="logo"
          />
          <a className={styles.header_title} href="/">
            eSTRIX Game Store
          </a>
          <BurgerMenu />
        </div>
        <div className={styles.header_right}>
          <a className={styles.header_user} href="/">
            <img
              src="/assets/icons/user.png"
              style={{ width: '25px' }}
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header
