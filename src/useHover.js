import { useRef, useState, useEffect } from 'react'

export function useHover() {
	const [hovered, setHover] = useState(false)
	const ref = useRef(null)

	const handleMouseEnter = () => setHover(true)
	const handleMouseLeave = () => setHover(false)

	useEffect(() => {
		const box = ref.current
		if (box) {
			box.addEventListener('mouseenter', handleMouseEnter)
			box.addEventListener('mouseleave', handleMouseLeave)

			return () => {
				box.removeEventListener('mouseenter', handleMouseEnter)
				box.removeEventListener('mouseleave', handleMouseLeave)
			}
		}
	}, [ref])

	return { hovered, ref }
}
