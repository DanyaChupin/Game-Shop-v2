import { Link } from 'react-router-dom'
import Login from '../../components/Login/Login'
import styles from './LoginPage.module.scss'
const LoginPage = () => {
	return (
		<div className={styles.loginPage_wrapper}>
			<h3 className={styles.loginPage_title}>Login</h3>
			<Login />
			<p>
				or <Link to='/register'>Register</Link>
			</p>
		</div>
	)
}

export default LoginPage
