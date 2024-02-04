import React from 'react'
import { useLocalStorage } from './useLocalStorage.ts'
import './App.css'

function App() {
	const [token, { setItem, removeItem }] = useLocalStorage('token')

	return (
		<div className='token'>
			<p>Твой токен: {token !== null ? token : 'токен отсутствует'}</p>
			<div>
				<button className='setToken' onClick={() => setItem('новый токен')}>
					Задать токен
				</button>
				<button className='deleteToken' onClick={() => removeItem()}>
					Удалить токен
				</button>
			</div>
		</div>
	)
}

export default App
