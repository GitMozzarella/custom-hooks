import { useEffect, useState } from 'react'

export function useViewportSize() {
	const [width, setWidth] = useState(0)
	const [height, setHeight] = useState(0)

	useEffect(() => {
		const handleResize = () => {
			setWidth(window.innerWidth)
			setHeight(window.innerHeight)
		}

		if (typeof window !== 'undefined') {
			setWidth(window.innerWidth)
			setHeight(window.innerHeight)
			window.addEventListener('resize', handleResize)

			return () => {
				window.removeEventListener('resize', handleResize)
			}
		}
	}, [])

	return { width, height }
}
