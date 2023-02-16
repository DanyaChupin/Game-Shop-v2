import { useState } from 'react'
import styles from './Form.module.scss'

const Form = ({ title, handleClick }) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	return (
		<div className={styles.form_wrapper}>
			<input
				className={styles.form_input}
				type='email'
				value={email}
				onChange={e => setEmail(e.target.value)}
				placeholder='Email'
			/>
			<input
				className={styles.form_input}
				type='password'
				value={password}
				onChange={e => setPassword(e.target.value)}
				placeholder='Password'
			/>
			<button
				className={styles.form_button}
				onClick={() => handleClick(email, password)}
			>
				{title}
			</button>
		</div>
	)
}

export default Form
