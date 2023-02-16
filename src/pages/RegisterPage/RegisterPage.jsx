import { Link } from 'react-router-dom'
import SignUp from '../../components/SignUp/SignUp'
import styles from './RegisterPage.module.scss'

const RegisterPage = () => {
	return (
		<div className={styles.registerPage_wrapper}>
			<h3 className={styles.registerPage_title}>Registration</h3>
			<SignUp />
			<p>
				or <Link to='/login'>Login</Link>
			</p>
		</div>
	)
}

export default RegisterPage
