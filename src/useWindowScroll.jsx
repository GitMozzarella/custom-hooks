// useWindowScroll.jsx
import { useState } from 'react'
import { useWindowEvent } from './useWindowEvent'

export function useWindowScroll() {
	const [scroll, setScroll] = useState({ x: 0, y: 0 })

	useWindowEvent('scroll', () => {
		setScroll({ x: window.scrollX, y: window.scrollY })
	})

	const scrollTo = ({ x, y }) => {
		window.scrollTo(x, y)
	}

	return [scroll, scrollTo]
}
