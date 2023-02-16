import { Link } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { useAuth } from '../../hooks/useAuth'
import { removeUser } from '../../store/userSlice'
import styles from './UserPanel.module.scss'
const UserPanel = ({ closedSideBar }) => {
	const dispatch = useDispatch()
	const { isAuth, email } = useAuth()

	return (
		<Link
			onClick={closedSideBar}
			to={isAuth ? '/home' : '/login'}
			className={styles.userPanel_wrapper}
		>
			{isAuth ? (
				<>
					<div className={styles.userPanel_info}>
						<p className={styles.usePanel_name}>{email}</p>
					</div>

					<img
						onClick={() => dispatch(removeUser())}
						className={styles.userPanel_icon}
						src='/assets/icons/exit.png'
						alt='exit'
					/>
				</>
			) : (
				<button className={styles.userPanel_goLogin}>Go to Login...</button>
			)}
		</Link>
	)
}

export default UserPanel
