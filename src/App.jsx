import React, { useRef, useEffect } from 'react'
import { useToggle } from './useToggle'
import './App.css'

function App() {
	const buttonRef = useRef(null)
	const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal'])

	const changeBackgroundColor = color => {
		if (buttonRef.current) {
			buttonRef.current.style.backgroundColor = color
		}
	}

	useEffect(() => {
		changeBackgroundColor(value)
	}, [value])

	return (
		<div ref={buttonRef} className='container'>
			<button className='custom-button' onClick={toggle}>
				{value}
			</button>
		</div>
	)
}

export default App
