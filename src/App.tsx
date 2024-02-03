import React from 'react'
import { useFetch, IPost } from './useFetch'
import './App.css'

function App() {
	const { data, isLoading, error, refetch } = useFetch(
		'https://jsonplaceholder.typicode.com/posts'
	)

	return (
		<div className='container'>
			<div>
				<button
					className='button'
					onClick={async () => await refetch({ params: { _limit: 3 } })}
				>
					Перезапросить
				</button>
			</div>
			{isLoading && <div className='loading'>Загрузка...</div>}
			{error && <div className='error'>Произошла ошибка</div>}
			{data &&
				!isLoading &&
				data.map((item: IPost) => (
					<div key={item.id} className='post'>
						<div className='post-title'>{item.title}</div>
						<div className='post-body'>{item.body}</div>
					</div>
				))}
		</div>
	)
}

export default App
