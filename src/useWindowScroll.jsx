// useWindowScroll.jsx
import { useState } from 'react'
import { useWindowEvent } from './useWindowEvent'

export function useWindowScroll() {
	const [scroll, scrollTo] = useState({ x: 0, y: 0 })

	useWindowEvent('scroll', () => {
		scrollTo({ x: window.scrollX, y: window.scrollY })
	})

	return [scroll, scrollTo]
}
