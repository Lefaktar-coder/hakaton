import { useState } from 'react'
import './LoginForm.css'

const LoginForm = () => {
	const [formData, setFormData] = useState({
		username: '',
		password: '',
	})

	const handleChange = e => {
		const { name, value } = e.target
		setFormData({
			...formData,
			[name]: value,
		})
	}

	// new commit

	const handleSubmit = async e => {
		e.preventDefault()

		try {
			const username = { username: e.target.value }
			console.log(username)
			const password = { password: e.target.value }
			console.log(password)

			const response = await fetch('http://maratagliullin.pythonanywhere.com/api/v1/test', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Basic ${btoa(`${username}:${password}`)}`,
				},
				body: JSON.stringify(formData),
			})

			console.log('HTTP статус:', response.status)

			if (response.ok) {
				console.log('Вход выполнен успешно')
				// Дополнительная логика после успешного входа
			} else {
				const errorData = await response.json()
				console.error('Ошибка входа:', errorData || 'Нет данных об ошибке')
				// Дополнительная логика в случае ошибки входа
			}
		} catch (error) {
			console.error('Произошла ошибка:', error)
		}
	}

	return (
		<div className='login__wrapper'>
			<h2 className='login__title'>Вход</h2>
			<form
				className='login__form'
				onSubmit={handleSubmit}>
				<label className='login__label'>
					Логин:
					<input
						className='login__input'
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

				<button
					className='form__button'
					type='submit'>
					Войти
				</button>
			</form>
		</div>
	)
}

export default LoginForm
