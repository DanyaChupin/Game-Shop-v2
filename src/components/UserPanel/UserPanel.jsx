import styles from './UserPanel.module.scss'
const UserPanel = () => {
  return (
    <div className={styles.userPanel_wrapper}>
      <div className={styles.userPanel_info}>
        <p className={styles.usePanel_name}>Name </p>
        <p className={styles.userPanel_email}>email </p>
      </div>
      <img
        className={styles.userPanel_icon}
        src="/assets/icons/exit.png"
        alt="exit"
      />
    </div>
  )
}

export default UserPanel
