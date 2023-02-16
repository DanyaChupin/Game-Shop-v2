import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setUser } from '../../store/userSlice'
import Form from '../Form/Form'
import styles from './Login.module.scss'
const Login = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const handleLogin = (email, password) => {
		const auth = getAuth()
		signInWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				dispatch(
					setUser({
						email: user.email,
						id: user.uid,
						token: user.accessToken,
					})
				)
				navigate('/')
			})
			.catch(console.error)
	}
	return <Form className={styles} title='Sign in' handleClick={handleLogin} />
}

export default Login
