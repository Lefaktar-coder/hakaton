import { useState } from 'react'
import './RegistrationForm.css'

const RegistrationForm = () => {
	// eslint-disable-next-line no-unused-vars
	const [token, setToken] = useState(null)
	const [registrationStatus, setRegistrationStatus] = useState(null)

	const [formData, setFormData] = useState({
		username: '',
		password: '',
		confirmPassword: '',
	})

	const [showModal, setShowModal] = useState(true)

	const handleChange = e => {
		const { name, value } = e.target
		setFormData({
			...formData,
			[name]: value,
		})
	}

	const handleSubmit = async e => {
		e.preventDefault()

		if (formData.password !== formData.confirmPassword) {
			console.error('Пароли не совпадают')
			setRegistrationStatus('passwordMismatch')
			return
		}

		try {
			const response = await fetch('https://maratagliullin.pythonanywhere.com/api/v1/auth/users/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			})

			if (response.ok) {
				console.log('Пользователь успешно зарегистрирован')

				const data = await response.json()
				const receivedToken = data.token

				if (receivedToken) {
					console.log('Пользователь успешно зарегистрирован')
					setToken(receivedToken)
					setRegistrationStatus('success')
					setShowModal(false)
				} else {
					console.error('Токен не получен от сервера')
					setRegistrationStatus('error')
				}
			} else {
				console.error('Ошибка при регистрации')
				setRegistrationStatus('error')
			}
		} catch (error) {
			console.error('Произошла ошибка:', error)
			setRegistrationStatus('error')
		}

		{
			registrationStatus === 'success' && <p>Регистрация успешна!</p>
		}
		{
			registrationStatus === 'error' && <p>Произошла ошибка при регистрации</p>
		}
	}

	return (
		<div className='register__wrapper'>
			{showModal && (
				<div className='modal'>
					<h2 className='register__title'>Регистрация</h2>
					<form
						className='register__form'
						onSubmit={handleSubmit}>
						<label>
							Логин:
							<input
								type='text'
								name='username'
								value={formData.username}
								onChange={handleChange}
								required
							/>
						</label>

						<label>
							Пароль:
							<input
								type='password'
								name='password'
								value={formData.password}
								onChange={handleChange}
								required
							/>
						</label>

						<label>
							Подтвердите пароль:
							<input
								type='password'
								name='confirmPassword'
								value={formData.confirmPassword}
								onChange={handleChange}
								required
							/>
						</label>

						<button
							className=' button'
							type='submit'>
							Зарегистрироваться
						</button>
					</form>
				</div>
			)}
		</div>
	)
}

export default RegistrationForm
