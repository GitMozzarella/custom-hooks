import React, { useRef, useEffect, useState } from 'react'
import { useToggle } from './useToggle'
import './App.css'

function App() {
	const buttonRef = useRef(null)
	const [value, toggle] = useToggle(['light', 'dark'])
	const [themeClass, setThemeClass] = useState('light')

	const changeBackgroundColor = color => {
		if (buttonRef.current) {
			buttonRef.current.style.backgroundColor = color
		}
	}

	useEffect(() => {
		changeBackgroundColor(value === 'light' ? '#007bff' : '#ffc107')
		setThemeClass(value)
	}, [value])

	return (
		<div className={`container ${themeClass}`}>
			<h1>Current theme: {value}</h1>
			<button onClick={toggle}>Сменить тему</button>
		</div>
	)
}

export default App
