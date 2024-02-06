import './App.css'
import { useHover } from './useHover'

function App() {
	const { hovered, ref } = useHover()

	return (
		<div className='box' ref={ref}>
			{hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
		</div>
	)
}

export default App
