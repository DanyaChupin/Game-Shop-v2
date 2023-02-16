import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import Form from '../Form/Form'
import styles from './SignUp.module.scss'

const SignUp = () => {
	const navigate = useNavigate()
	const handleRegister = (email, password) => {
		const auth = getAuth()
		createUserWithEmailAndPassword(auth, email, password)
			.then(() => {
				navigate('/login')
			})
			.catch(console.error)
	}
	return (
		<Form className={styles} title='Register' handleClick={handleRegister} />
	)
}

export default SignUp
