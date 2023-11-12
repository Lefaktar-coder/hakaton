import { useState } from 'react'

const RegistrationForm = () => {
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

		try {
			const response = await fetch('http://maratagliullin.pythonanywhere.com/api/v1/auth/users/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			})

			if (response.ok) {
				console.log('Пользователь успешно зарегистрирован')

				setFormData({
					username: '',
					password: '',
					confirmPassword: '',
				})

				setShowModal(false)
			} else {
				console.error('Ошибка при регистрации')
			}
		} catch (error) {
			console.error('Произошла ошибка:', error)
		}
	}

	return (
		<div>
			{showModal && (
				<div className='modal'>
					<h2>Регистрация</h2>
					<form onSubmit={handleSubmit}>
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
						<br />

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
						<br />

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
						<br />

						<button
							className='form__button'
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
