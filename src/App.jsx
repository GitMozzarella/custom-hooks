import './App.css'
import { useWindowScroll } from './useWindowScroll'

function App() {
	const [scroll, scrollTo] = useWindowScroll()

	return (
		<div className='container'>
			<p className='scroll-info'>
				Scroll position x: {scroll.x}, y: {scroll.y}
			</p>
			<button
				className='button'
				onClick={() => scrollTo({ x: scroll.x, y: 0 })}
			>
				Scroll to top
			</button>
		</div>
	)
}

export default App
